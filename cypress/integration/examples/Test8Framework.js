/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
describe('My First Test', () => {

  before(function () {
    // run once before all tests in the block
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })
  it('Does not do much!', function () {
    const homePage = new HomePage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)

    homePage.getTwoDateBinding().should('have.value', this.data.name)

    homePage.getEditBox().should('have.attr', 'minlength', '2')

    homePage.getEntrepreneaur().should('be.disabled')

    homePage.getShopTab().click()

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element)
    })

    // cy.selectProduct('Blackberry')

    // cy.selectProduct('Nokia Edge')


  })
})