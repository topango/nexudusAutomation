Feature: Test the add and delete product functionality

        As a user
        i want to be able to validate the homepage functionality

        Background: User is in loginpage
                Given user navigate to the loginpage
                And user login successfully


        Scenario: Verify user can add and delete a product from the product list
                When user add a product to the product list
                And user search the newly created product is the first result on the list
                Then user is able to delete product from the product list






