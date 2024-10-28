import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
function randomText() {
  return Math.random().toString(12).substring(2);
}
//Add Media
Given("Precondition", ()=> {
cy.setCookie('SSESS5c9760df2359cffa5c65f85d8989c514', 'qwPbtf18poU7hF9AiUv-%2CvUXnwASazeAn5faYflO6Y7vuvqM', {
    domain: ".cookreportdev.prod.acquia-sites.com"
  });
cy.visit('https://cookreportdev.prod.acquia-sites.com/')
})

When("Action", ()=> {
  cy.get('.toolbar-icon-system-admin-content').click()
  cy.get('[data-original-order="4"] > .tabs__link').click()
  cy.get('.local-actions__item > .button').click()
  cy.get(':nth-child(3) > .admin-item__title > .admin-item__link').click()
  cy.get('#edit-name-0-value').type("Cypress Image "+"randomText")
  cy.get('#edit-field-media-image-1-0-upload').selectFile('cypress/fixtures/Test Image.png')
  cy.get('input[id^="edit-field-media-image-1-0-alt--"]').type('Cypress'+ 'randomText')
  cy.get('#edit-submit').click()
})

Then("Outcome1", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})
//Edit Media

When("Edit Media", ()=>{
  cy.get('.toolbar-icon-system-admin-content').click()
  cy.get('[data-original-order="4"] > .tabs__link').click()
  cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-name-0-value').type("Cypress Edit"+"randomText")
  cy.get('#edit-submit').click()
})

Then("Outcome2", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})

//Delete Media

When("Delete Media", ()=>{
  cy.get('.toolbar-icon-system-admin-content').click()
  cy.get('[data-original-order="4"] > .tabs__link').click()
  cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-delete').click()
  cy.get('.ui-dialog-buttonset > .button--primary').click()
})

Then("Outcome3", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})