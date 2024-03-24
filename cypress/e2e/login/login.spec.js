/// <reference types = "cypress" />
describe ('Login', ()=>{
    it ('Check login with valid data', ()=>{
        const userData ={
            email: 'test@example.com',
            password: 'qwerty123',
            rememberMe: true
        }
        cy.login (userData)
        cy.url({ timeout: 4000 }).should('include', '/pages/dashboard')
    })
})