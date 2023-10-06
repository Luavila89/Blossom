describe('Register', () => {
  //Test case #1
  it('As a user I want to register into an app web.', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').click();
    cy.wait(1000) 
    cy.get('#sign-username').type('Murcia01');
    cy.get('#sign-password').type('123*')
    cy.wait(1000) 
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(1000)  
  })
})