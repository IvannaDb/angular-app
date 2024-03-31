/// <reference types = "cypress" />

describe ('Create post', ()=> {
it("should create post", ()=>{
    const requestBody = {
          title: 'test11',
          body: 'tratata',
          userId: 10,
        }
    cy.api({
      method: 'POST',
      url: `${Cypress.env("API_URL")}/posts`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:requestBody
    }).as("createPost")

    cy.get("@createPost").its('status').should('eq', 201)
    cy.get("@createPost").its('body').should('contain', requestBody)
  })
})