/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(data: {email: string, password: string, rememberMe: boolean}): Chainable<void>
      
    }
  }
}
Cypress.Commands.add('login', ({email, password, rememberMe=false}: {email: string, password: string, rememberMe: boolean}) =>{
    cy.visit('/auth/login')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    if (rememberMe) cy.get('.custom-checkbox').click()
    cy.get("button[ng-reflect-status='primary']").click()
})