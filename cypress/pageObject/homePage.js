/// <reference types="cypress" />

class HomePage {

    addIcon() {
        return cy.get('#newRecordMenu');

    }

    addProductButton() {
        return cy.get(':nth-child(6) > .euiContextMenu__itemLayout');

    }

    productSearchField() {
        return cy.get("input[type='search']");

    }

    manualEntryButton() {
        // return cy.get(':nth-child(1) > .euiPanel > .euiCard__main');
        return cy.get('.euiText.css-1w6ric5-euiText-m');

    }

    productNameField() {
        return cy.get("input[data-test-subj='product_Name']");

    }

    dropdownIcon() {
        return cy.get("[data-test-subj='comboBoxToggleListButton']");


    }

    availableDropdown() {
        //   return cy.get('.euiComboBoxPill.euiComboBoxPill--plainText');
        return cy.get('.euiComboBoxPill');


    }

    productDescriptionField() {
        return cy.get("textarea[data-test-subj='product_Description']");

    }

    unitPriceField() {
        return cy.get("input[data-test-subj='product_Price']");
    }



    positionToDisplay() {
        return cy.get("[type='number']");

    }

    productCategoryField() {
        return cy.get("input[data-test-subj='product_Tags']");

    }

    saveChangesButton() {
        return cy.get('._button_1cuqw_33.css-t8ynyh-euiButtonDisplay-m-defaultMinWidth-fill-primary');

    }

    firstResult() {
        return cy.get("[aria-label='Page 1 of 1'] ");

    }

    productCheckbox() {
        return cy.get("input[aria-label='Select this row']");

    }

    yesDoItButton() {
        return cy.get('.euiModalFooter > .euiButton');

    }


}
export default HomePage;