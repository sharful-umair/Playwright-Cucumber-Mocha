@epic:Login
@severity:critical
@issue:123
Feature: Ecommerce Validation
@Smoke @Regression
  Scenario: Placing the order
    Given Login to Ecommerce application with "sharfulumair42@gmail.com" and "#Test1234"
    When Add a product "IPHONE 13 PRO" to the cart
    When Enter valid details and Place the order
    Then Verify the order is present in the order history