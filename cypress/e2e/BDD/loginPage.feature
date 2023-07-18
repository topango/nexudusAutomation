Feature: Test the login page functionality

        As a user
        i want to validate the login functionality

       

        Background: User is in loginpage
                Given user navigate to the loginpage


         Scenario: Verify user cannot login with invalid details
                When user submit an invalid login details
                Then user is not able to login successfully


        Scenario: Verify user can login with valid details
                When user submit a valid login details
                Then user is able to login successfully


       

                