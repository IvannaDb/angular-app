/// <reference types = "cypress" />

describe ('Get and update post', ()=> {
    it("should update post", ()=>{
        const postId = 4
        const requestBody = {
              title: 'update title',
              body: 'update body',
              userId: 7,
            }
        cy.api({
          method: 'PUT',
          url: `${Cypress.env("API_URL")}posts/${postId}`,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body:requestBody
        }).as("updatePost")
    
        cy.get("@updatePost").its('status').should('eq', 200)
        cy.get("@updatePost").its('body').should('contain', requestBody)
      })
    })