// Тест має перевіряти текст всередині даного компоненту на кожному кроці. 
// Тобто вам треба перевірити текст, після чого натиснути кнопку NEXT. 
// Потім знову перевірити текст. Повторювати до останнього степу.
describe ('Check the work of the stepper', ()=> {
    before (() => {
        cy.visit('/pages/layout/stepper')
    })
    it ('Check text for four steps', () => {
        const containerSelector = 'nb-stepper[orientation="horizontal"]'
        cy.get (`${containerSelector} h3 `).should('have.text', 'Step content #1')
        cy.get(`${containerSelector} button`).contains('prev').should('be.visible').and('be.disabled')
        cy.get(`${containerSelector} button`).contains('next').should('be.visible').and('be.enabled')
        cy.get(`${containerSelector} button`).contains('next').click()
        cy.get (`${containerSelector} h3 `).should('have.text', 'Step content #2')
        cy.get(`${containerSelector} button`).contains('prev').should('be.visible').and('be.enabled')
        cy.get(`${containerSelector} button`).contains('next').should('be.visible').and('be.enabled')
        cy.get(`${containerSelector} button`).contains('next').click()
        cy.get (`${containerSelector} h3 `).should('have.text', 'Step content #3')
        cy.get(`${containerSelector} button`).contains('prev').should('be.visible').and('be.enabled')
        cy.get(`${containerSelector} button`).contains('next').should('be.visible').and('be.enabled')
        cy.get(`${containerSelector} button`).contains('next').click()
        cy.get (`${containerSelector} h3 `).should('have.text', 'Step content #4')
        cy.get(`${containerSelector} button`).contains('prev').should('be.visible').and('be.enabled')
        cy.get(`${containerSelector} button`).contains('next').should('be.visible').and('be.disabled')
    })
})
