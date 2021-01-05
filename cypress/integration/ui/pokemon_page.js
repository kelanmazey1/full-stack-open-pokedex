describe('Individual pokemon page', function() {
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="ivysaur"]').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
    cy.get('.links')
      .children()
      .should('contain', 'Next')
      .and('contain', 'Previous')
      .and('contain', 'Home')
  })
})