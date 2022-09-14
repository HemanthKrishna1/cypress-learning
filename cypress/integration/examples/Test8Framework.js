/// <reference types="Cypress" />

describe('My First Test', () => {

  before(function () {
    // run once before all tests in the block
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })
  it('Does not do much!', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    cy.get(":nth-child(1) > .form-control").type(this.data.name)
    cy.get('select').select(this.data.gender)

    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

    cy.get(":nth-child(1) > .form-control").should('have.attr', 'minlength', '2')
    cy.get('#inlineRadio3').should('be.disabled')


    cy.get(':nth-child(2) > .nav-link').click()

    cy.selectProduct('Blackberry')
    cy.selectProduct('Nokia Edge')

  })
})