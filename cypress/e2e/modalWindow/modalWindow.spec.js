describe ('Check opening tha modal window', ()=>{
    beforeEach (()=> {
        cy.visit('/pages/modal-overlays/dialog')
    })
    it ('Check that right modal is opened', ()=>{
        const containerSelector = 'nb-card.form-input-card'
        const modalSelector = 'ngx-dialog-name-prompt.ng-star-inserted'
        cy.get(`${containerSelector}`).should('be.visible')
        cy.get (`${containerSelector} nb-card-header`).should('have.text', 'Return Result From Dialog')
        cy.get(`${containerSelector} button`).should('be.visible').click()
        cy.get(`${modalSelector}`).should('be.visible')
        cy.get (`${modalSelector} nb-card-header`).should('be.visible').and('have.text', 'Enter your name')
        cy.get (`${modalSelector} input`).should('be.visible').and('be.enabled')
        cy.get (`${modalSelector} input`).type('Test QA')
        cy.get(`${modalSelector} button.cancel`).should('be.visible').and('be.enabled')
        cy.get(`${modalSelector} button.status-success`).should('be.visible').and('be.enabled').click()
        cy.get(`${containerSelector} ul>li`).should('be.visible').and('have.text', 'Test QA')
    })
    it ('Check displaying the right name in the list', ()=> {
        const containerSelector = 'nb-card.form-input-card'
        const modalSelector = 'ngx-dialog-name-prompt.ng-star-inserted'
        cy.get(`${containerSelector} button`).should('be.visible').click()
        cy.get (`${modalSelector} input`).type('Test QA')
        cy.get(`${modalSelector} button.status-success`).click()
        cy.get(`${containerSelector} ul>li`).should('be.visible').and('have.text', 'Test QA')
    })
})