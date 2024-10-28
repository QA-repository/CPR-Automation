import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
function randomText() {
  return Math.random().toString(36).substring(2);
}
//Add Content
Given("Precondition", ()=> {
cy.setCookie('SSESS5c9760df2359cffa5c65f85d8989c514', 'qwPbtf18poU7hF9AiUv-%2CvUXnwASazeAn5faYflO6Y7vuvqM', {
    domain: ".cookreportdev.prod.acquia-sites.com"
  });
cy.visit('https://cookreportdev.prod.acquia-sites.com/')
})

When("Action", ()=> {
  cy.get('.toolbar-icon-system-admin-content').click()
  cy.get('.local-actions__item > .button').click()
  cy.get(':nth-child(1) > .admin-item__title > .admin-item__link').click()
  cy.get('#edit-title-0-value').type("Cypress" + randomText())
  cy.get('#edit-submit').click()
})

Then("Outcome1", ()=> {
  cy.get('.node-title').should('be.visible')
})
//Edit Content

When("Edit Content", ()=>{
  cy.get('.toolbar-icon-system-admin-content').click()
  cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-title-0-value').type("Cypress Edit" + randomText())
  cy.get('#edit-submit').click()
})

Then("Outcome2", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})

//Delete Content

When("Delete Content", ()=>{
  cy.get('.toolbar-icon-system-admin-content').click()
  cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('[data-original-order="2"] > .tabs__link').click()
  cy.get('#edit-submit').click()
})

Then("Outcome3", ()=> {
  cy.get('#block-politicalreport-branding > .site-logo > img').should('be.visible')
})