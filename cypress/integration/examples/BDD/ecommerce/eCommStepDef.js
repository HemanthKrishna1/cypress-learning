/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// add cucumber report options in package.json ->output.json
// use html report plugin /create js file (pass the details of output.json)
// run js file
const homePage = new HomePage()
const productPage = new ProductPage()
let name
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

When('I fill the form details', function (dataTable) {
  name = dataTable.rawTable[1][0]
  homePage.getEditBox().type(name)
  homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the forms behavious', function () {
  homePage.getTwoDateBinding().should('have.value', name)
  homePage.getEditBox().should('have.attr', 'minlength', '2')
  homePage.getEntrepreneaur().should('be.disabled')
  Cypress.config('defaultCommandTimeout', 8000)

})

And('select the shop Page', function () {
  homePage.getShopTab().click()
})