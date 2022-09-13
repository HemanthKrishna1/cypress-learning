describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)

    cy.get('.products').as('productLocator') // can cahnge the name instead of cahngeing everywhere

    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
      console.log('this is printed after added')
      // this is non cypress command and it prints only when this is resolved
    })

    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
      const txt = $e1.find('h4.product-name').text();
      if (txt.includes('Cashews')) {
        $e1.find('button').click();
      }
    })

    // assert logo texts
    cy.get('.brand').should('have.text', 'GREENKART')

    // this is to print logs
    cy.get('.brand').then(function (logoElement) {
      cy.log(logoElement.text())
    })
    //const logo=cy.get('.brand')
    //cy.log(cy.get('.brand').text())
    // cy.log(logo.text())
    // text is not a cypress method and hence should resolve the promise and then only can use log() function


  })

})




/*
// console.log() will print the ouput in the Console whereas in cypress it runs directly in browser

*/