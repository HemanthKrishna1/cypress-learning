/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Checkboxes
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    // Window:alert
    // fires browser event and window:alert is the event whivh gets fired on alert 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    // cypress have the ability to manipulate the DOM

    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'rahulshettyacademy')
    cy.go('back')
  })

})