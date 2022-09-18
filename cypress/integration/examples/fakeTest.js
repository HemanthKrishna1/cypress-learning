/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept(
      {
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
      },
      {
        statusCode: 200,
        body: [
          {
            "book_name": "RestAssured with Java",
            "isbn": "RSU",
            "aisle": "2301"
          }
        ]
      }).as('bookretrievals')

    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookretrievals')
    cy.get('p').should('have.text', 'Sorry we have only one book available')
  })

})