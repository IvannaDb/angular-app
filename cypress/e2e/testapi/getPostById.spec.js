/// <reference types = "cypress" />
// import postById from  '../../fixtures/postById.json'

describe ('Get post by id', ()=> {
    it('should return post item by id', () => {
        const postId = 4
        cy.api({
          url: `${Cypress.env("API_URL")}posts/${postId}`
        }).as("getPost")
    
        cy.get("@getPost").its("status").should('eq', 200)
        cy.get("@getPost").its("body.id").should('eq', postId)
      })

        it('should have all required fields for a post object', () => {
            const requiredFields = ['userId', 'id', 'title', 'body']; 
    
            cy.api({
                url: `${Cypress.env("API_URL")}posts/1`
            }).then((response) => {
                requiredFields.forEach((field) => {
                    expect(response.body).to.have.property(field)
                    expect(response.body[field]).to.not.be.null
                    expect(response.body[field]).to.not.be.undefined
                })
            })
        })
// NOT WORKING
//         it('should mock response', () => {      
//             cy.intercept('GET',`${Cypress.env("API_URL")}posts/1`, postById)
//             cy.api({
//                 url: `${Cypress.env("API_URL")}posts/1`
//               }).as("getMockedPost")
//               cy.get("@getMockedPost").its("status").should('eq', 200)
//               cy.get("@getMockedPost").its("body").should('eq', postById)
//           })
});

