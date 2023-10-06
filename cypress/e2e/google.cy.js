//Suite test cases
describe('Searching google', () => {
  //Test case #1
  it('As a user I want to search for any term using the single search bar on the screen.', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Blossom{enter}');
    cy.wait(2000)
    
  })
  //Test case #2 and #3
  it('As a user I want to see how many results were found / As a user I want to see how long it takes', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Blossom{enter}');
    cy.get('#result-stats').invoke('text').then(resultados_encontrados => {
      cy.log("Resultados encontrados y tiempo: " + resultados_encontrados);
    });
    cy.wait(2000)
    
  })
  //Test case #4
  it('As a user I want to see an error message when the result is 0', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('8434jkrei54j54ui{enter}');
    cy.get('#result-stats').invoke('text').then(resultados_encontrados => {
      if(resultados_encontrados.includes("Cerca de 0 resultados")){
        cy.log("Error: No se encontraron resultados");
      }else
        cy.log("Resultados encontrados y tiempo: " + resultados_encontrados);
    });
    cy.wait(2000)    
    
  })
  //Test case #5
  it('As a user I want to see the page configurations', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Blossom{enter}');
    cy.get('#hdtb-tls{enter}')
    cy.get('.GOE98c{enter}')
    cy.wait(2000)   
    
  })
  
})