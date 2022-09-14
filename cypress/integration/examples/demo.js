/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.frameLoaded('#courses-iframe')
    // switch to i frame mode
    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
  })
})



describe('My Second Test Suite', function () {

  it('My FirstTest case', function () {

    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({ force: true })
    cy.url().should('include', 'top')
  })


})