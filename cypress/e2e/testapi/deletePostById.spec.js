describe ('Get post by id', ()=> {
 
    it('should return post item by id', () => {
        const postId = 4
        cy.api({
            method: 'DELETE',
            url: `${Cypress.env("API_URL")}posts/${postId}`
        }).as("deletePost")
    
        cy.get("@deletePost").its("status").should('eq', 200)
        cy.get("@deletePost").its("body").should('be.empty');
})
})
