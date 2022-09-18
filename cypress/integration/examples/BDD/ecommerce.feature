Feature: End to end Ecommerce Validation

  application Regression
  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

  @Smoke
  Scenario: Filling the form
    Given I open Ecommerce Page
    When I fill the form details
      | name | gender |
      | Suja | Female |
    Then Validate the forms behavious
    And select the shop Page