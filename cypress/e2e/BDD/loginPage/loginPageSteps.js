/// <reference types="cypress" />
import { Given, When, Then, And, } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pageObject/loginPage";
const loginPage = new LoginPage();

Given('user navigate to the loginpage', () => {
    cy.NavigateToLoginPage();
});

When('user submit an invalid login details', () => {
    loginPage.emailField().type('bad@example.com');
    loginPage.passwordField().type('badpassword');
    loginPage.signinButton().click();
});

Then('user is not able to login successfully', () => {
   loginPage.invalidLoginMessage().should('be.visible');
});

When('user submit a valid login details', () => {
    loginPage.emailField().type('adrian+1004930927@nexudus.com');
    loginPage.passwordField().type('i0i1lgVD8OK8');
    loginPage.signinButton().click();
});

Then('user is able to login successfully', () => {
    loginPage.validLogin().should('be.visible');
 });