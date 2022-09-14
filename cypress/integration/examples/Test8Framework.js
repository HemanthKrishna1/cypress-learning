/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

// Change URL from command: node_modules/.bin/cypress run --spec cypress/integration/examples/Test8Framework.js --env url=https://google.com --headed
describe('My First Test', () => {

  before(function () {
    // run once before all tests in the block
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })
  it('Does not do much!', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()

    cy.visit(Cypress.env('url') + '/angularpractice/');

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoDateBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)

    homePage.getShopTab().click()

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element)
    })


    productPage.checkOutButton().click()

    var sum = Number(0)
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
    // cy.selectProduct('Blackberry')

    // cy.selectProduct('Nokia Edge')
  })
})