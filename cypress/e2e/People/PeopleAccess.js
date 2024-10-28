import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
function randomText() {
  return Math.random().toString(12).substring(2);
}
//Add People
Given("Precondition", ()=> {
cy.setCookie('SSESS5c9760df2359cffa5c65f85d8989c514', 'qwPbtf18poU7hF9AiUv-%2CvUXnwASazeAn5faYflO6Y7vuvqM', {
    domain: ".cookreportdev.prod.acquia-sites.com"
  });
cy.visit('https://cookreportdev.prod.acquia-sites.com/')
})

When("Action", ()=> {
  cy.get('.toolbar-icon-entity-user-collection').click()
  cy.get('.local-actions__item > .button').click()
  cy.get('#edit-mail').type("123Cypress@321.com")
  cy.get('#edit-name').clear()
  cy.get('#edit-name').type("1CypressAuto")
  cy.get('#edit-pass-pass1').type("Admin@123")
  cy.get('#edit-pass-pass2').type("Admin@123")
  cy.get('#edit-roles-member').click()
  cy.get('#edit-submit').click()
})

Then("Outcome1", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})
//Edit People

When("Edit People", ()=>{
  cy.get('.toolbar-icon-entity-user-collection').click()
  cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-field-first-name-0-value').type("Cypress People"+"randomText")
  cy.get('#edit-submit').click()
})

Then("Outcome2", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})

//Delete People

When("Delete People", ()=>{
  cy.get('.toolbar-icon-entity-user-collection').click()
  cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-delete').click()
  cy.get('#edit-submit').click()
})

Then("Outcome3", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})