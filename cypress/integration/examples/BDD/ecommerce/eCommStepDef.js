/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open Ecommerce Page', () => {
  cy.visit(Cypress.env('url') + '/angularpractice/');
})

When('I add items to Cart', function () {
  homePage.getShopTab().click()
  this.data.productName.forEach(function (element) {
    cy.selectProduct(element)
  })
  productPage.checkOutButton().click()
})

And('Validate the total prices', () => {
  var sum = 0;
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    const amount = $el.text()
    var res = amount.split(" ")
    res = res[1].trim()
    sum += Number(res)
  }).then(function () {
    cy.log(sum)
  })
  cy.get('h3 strong').then(function ($el) {
    const amount = $el.text()
    var res = amount.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(sum)
  })
})

Then('select the country submit and verify Thankyou', () => {
  cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({ force: true })
  cy.get('input[type="submit"]').click()
  // cy.get('.alert').should('have.text', '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ')

  cy.get('.alert').then(function (el) {
    const txt = el.text();

    expect(txt.includes('Success')).to.be.true
  })
})

