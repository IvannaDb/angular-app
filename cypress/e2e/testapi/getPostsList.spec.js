/// <reference types = "cypress" />

describe ('Get post by id', ()=> {
    it('should return posts list', () => {
        cy.api({
          url: `${Cypress.env("API_URL")}posts`
        }).as("getPost")   
        cy.get("@getPost").then((response) => {
            cy.wrap(response.status).should('eq', 200)
            cy.wrap(response.body).should('be.an', 'array').and('have.length.greaterThan', 5)
            response.body.forEach((post) => {
                expect(post).to.have.keys('userId', 'id', 'title', 'body')
                expect(post.userId).not.to.equal(11);
            })
        })
      })
})