describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // .and() means concatination of should assertion
    // Checkbox
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])


    // Static Dropdown
    cy.get('select').select('option2').should('have.value', 'option2')


    // Dynamic Dropdown
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
      if ($e1.text() === 'India') {
        $e1.click();
      }
    })
    // auto complete 
    cy.get('#autocomplete').should('have.value', 'India')

    // visible and Invisible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    // Radio button
    cy.get('[value="radio2"]').check().should('be.checked')
  })

})