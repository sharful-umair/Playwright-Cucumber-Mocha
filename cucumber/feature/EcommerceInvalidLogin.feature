Feature: Ecommerce Validation
@Sanity
  Scenario Outline: Placing the order with invalid credentials
    Given Login to Ecommerce application with "<username>" and "<password>"
    Then Verify the error message "Incorrect email or password." is displayed

    Examples:
        | username                | password   |
        | sharfulumair@gmail.com  | #Test1234  |
        | sharful@gmail.com       | #Test1234  |
