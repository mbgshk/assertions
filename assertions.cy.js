/// <reference types="cypress" />

// Sample
// describe('My First Test', () => {
//     it('clicking "type" navigates to a new url', () => {
//       cy.visit('https://example.cypress.io')
      
//       cy.contains('type').click()

//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
//     })
// })

// Check the URL
describe('Browser Actions', () => {
    it('Should load corret url', () => {
        cy.visit('https://example.com/', { timeout: 10000 })
    });

    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    });
});