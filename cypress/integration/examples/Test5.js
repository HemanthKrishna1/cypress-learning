/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
      const txt = $e1.text();
      if (txt.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })
      }
    })
  })
})