/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#opentab').then((e1) => {
      const url = e1.prop('href')
      // will give error subdoamin is ok but not different domain
      // visit method will not accept any super domain only same domain (child domain)
      cy.visit(url)

    })

  })
})