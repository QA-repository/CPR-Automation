import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
function randomText() {
  return Math.random().toString(12).substring(2);
}
//Add Menu
Given("Precondition", ()=> {
cy.setCookie('SSESS5c9760df2359cffa5c65f85d8989c514', 'qwPbtf18poU7hF9AiUv-%2CvUXnwASazeAn5faYflO6Y7vuvqM', {
    domain: ".cookreportdev.prod.acquia-sites.com"
  });
cy.visit('https://cookreportdev.prod.acquia-sites.com/')
})

When("Action", ()=> {
  cy.get('.toolbar-icon-system-admin-structure').click()
  cy.get(':nth-child(10) > .admin-item__title > .admin-item__link').click()
  cy.get(':nth-child(6) > :nth-child(3) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('.local-actions__item > .button').click()
  cy.get('#edit-title-0-value').type("1CypressMenu")
  cy.get('#edit-link-0-uri').type('https://google.jo')
  cy.get('#edit-submit').click()
})

Then("Outcome1", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})
//Edit Menu

When("Edit Menu", ()=>{
  cy.get('.toolbar-icon-system-admin-structure').click()
  cy.get(':nth-child(10) > .admin-item__title > .admin-item__link').click()
  cy.get(':nth-child(6) > :nth-child(3) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('[data-drupal-selector="edit-links-menu-plugin-idmenu-link-contentb688c973-7b57-4a12-9457-cb957297083f"] > :nth-child(4) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-title-0-value').type("1CypressEdit")
  cy.get('#edit-submit').click()
})

Then("Outcome2", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})

//Delete Taxonomy

When("Delete Menu", ()=>{
  cy.get('.toolbar-icon-system-admin-structure').click()
  cy.get(':nth-child(10) > .admin-item__title > .admin-item__link').click()
  cy.get(':nth-child(6) > :nth-child(3) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('[data-drupal-selector="edit-links-menu-plugin-idmenu-link-contentb688c973-7b57-4a12-9457-cb957297083f"] > :nth-child(4) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a').click()
  cy.get('#edit-delete').click()
  cy.get('.ui-dialog-buttonset > .button--primary').click()
})

Then("Outcome3", ()=> {
  cy.get('.messages-list__item').should('be.visible')
})