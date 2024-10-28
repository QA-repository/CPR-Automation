import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
function randomText() {
  return Math.random().toString(12).substring(2);
}
//Add Taxonomy
Given("Precondition", ()=> {
cy.setCookie('SSESS5c9760df2359cffa5c65f85d8989c514', 'qwPbtf18poU7hF9AiUv-%2CvUXnwASazeAn5faYflO6Y7vuvqM', {
    domain: ".cookreportdev.prod.acquia-sites.com"
  });
cy.visit('https://cookreportdev.prod.acquia-sites.com/')
})

When("Action", ()=> {
  cy.get('.toolbar-icon-system-admin-structure').click()
  cy.get(':nth-child(13) > .admin-item__title > .admin-item__link').click()
  cy.get('[data-drupal-selector="edit-vocabularies-tags"] > :nth-child(4) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .list > a').click()
  cy.get('.local-actions__item > .button').click()
  cy.get('#edit-name-0-value').type("1CypressTaxonomy")
  cy.get('#edit-overview').click()
})

Then("Outcome1", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})
//Edit Taxonomy

When("Edit Taxonomy", ()=>{
  cy.get('.toolbar-icon-system-admin-structure').click()
  cy.get(':nth-child(13) > .admin-item__title > .admin-item__link').click()
  cy.get('[data-drupal-selector="edit-vocabularies-tags"] > :nth-child(4) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .list > a').click()
  cy.get('[data-drupal-selector="edit-terms-tid17760"] > :nth-child(2) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-name-0-value').type("1Cypress Edit")
  cy.get('#edit-submit').click()
})

Then("Outcome2", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})

//Delete Taxonomy

When("Delete Taxonomy", ()=>{
  cy.get('.toolbar-icon-system-admin-structure').click()
  cy.get(':nth-child(13) > .admin-item__title > .admin-item__link').click()
  cy.get('[data-drupal-selector="edit-vocabularies-tags"] > :nth-child(4) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .list > a').click()
  cy.get('[data-drupal-selector="edit-terms-tid17760"] > :nth-child(2) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-delete').click()
  cy.get('.ui-dialog-buttonset > .button--primary').click()
})

Then("Outcome3", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})