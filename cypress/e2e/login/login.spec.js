describe ('Login', ()=>{
    before (()=> {
        cy.visit('/auth/login')
    })
    it ('Check login with valid data', ()=>{
        const userData ={
            email: 'test@example.com',
            password: 'qwerty123',
            rememberMe: true
        }
        cy.login (userData)
        cy.wait(4000)
        cy.url().should('include', '/pages/dashboard')
    })
})