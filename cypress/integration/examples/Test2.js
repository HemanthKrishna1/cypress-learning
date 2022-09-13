describe('My Second Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    cy.get('.products').as('productLocator')

    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
      const txt = $e1.find('h4.product-name').text();
      if (txt.includes('Cashews')) {
        $e1.find('button').click();
      }
    })

  })

})




/*
// console.log() will print the ouput in the Console whereas in cypress it runs directly in browser

*/