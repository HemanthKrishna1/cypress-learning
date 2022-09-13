describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1')
  })

})