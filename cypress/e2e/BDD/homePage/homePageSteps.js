/// <reference types="cypress" />
import { Given, When, Then, And, } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pageObject/homePage";
import LoginPage from "../../../pageObject/loginPage";
const homePage = new HomePage();
const loginPage = new LoginPage();

const email = 'adrian+1004930927@nexudus.com'
const password = 'i0i1lgVD8OK8'


Given('user navigate to the loginpage', () => {
    //cy.viewport(1000, 660);
    cy.NavigateToLoginPage();
});

And('user login successfully', () => {
    loginPage.emailField().type(email);
    loginPage.passwordField().type(password);
    loginPage.signinButton().click();
    loginPage.validLogin().should('be.visible');
});


When(`user add a product to the product list`, () => {
    homePage.addIcon().click();
    homePage.addProductButton().click();
    homePage.manualEntryButton().contains('Create this record field by field').click();
    homePage.productNameField().clear().type('DTG Printer');
    homePage.dropdownIcon().click();
    cy.wait(2000)
    homePage.availableDropdown().click({ force: true });
    homePage.productDescriptionField().clear().type('Direct to Garment');
    cy.wait(1000)
    homePage.unitPriceField().eq(0).scrollIntoView({ force: true })
    homePage.unitPriceField().click({ force: true })
    homePage.unitPriceField().clear({ force: true }).type('20')
    cy.wait(1000)
    homePage.productCategoryField().eq(0).scrollIntoView({ force: true })
    homePage.productCategoryField().clear({ force: true }).type('Category D')
    cy.wait(1000)
    homePage.positionToDisplay().eq(0).scrollIntoView({ force: true })
    homePage.positionToDisplay().eq(0).type('1')
    homePage.saveChangesButton().click();
    cy.contains('DTG Printer').should('be.visible');
});

And(`user search the newly created product is the first result on the list`, () => {
    homePage.productSearchField().clear({ force: true }).type('DTG')
    cy.wait(2000)
    homePage.firstResult().should('be.visible')
});

Then(`user is able to delete product from the product list`, () => {
    homePage.productCheckbox().click({ force: true });
    cy.contains('Delete 1 record').click({ force: true })
    homePage.yesDoItButton().should('be.visible')
    homePage.yesDoItButton().click({ force: true })
    cy.contains('DTG').should('not.exist')


});



























