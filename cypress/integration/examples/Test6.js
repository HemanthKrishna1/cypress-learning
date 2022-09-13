/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({ force: true })
    cy.url().should('include', 'top')
  })
})