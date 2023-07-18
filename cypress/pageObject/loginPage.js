/// <reference types="cypress" />

class LoginPage {

    emailField() {
        return cy.get("input[name='Email']");

    }

    passwordField() {
        return cy.get("input[name='Password']");

    }

    signinButton() {
        return cy.get("button[type='submit']");

    }

    invalidLoginMessage() {
        return cy.get('.euiText.css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description');

    }

    validLogin() {
        return cy.get("a[title='Home']");

    }



}
export default LoginPage;