describe('Product Widget', () => {
  it('should show loading state', () => {
    cy.visit('/');
    
    cy.get('[data-qa="skeleton"]')
      .should('exist');
  })

  it('should have only one active widget', () => {
    cy.visit('/');

    cy.get('[data-qa="switch"]')
    .eq(1)
    .click({ force: true });

    cy.get('[data-qa="switch"]')
      .eq(0)
      .should('not.be.checked');
    
    cy.get('[data-qa="switch"]')
      .eq(1)
      .should('be.checked');

    cy.get('[data-qa="switch"]')
      .eq(2)
      .should('not.be.checked');
  })

  it('should show a tooltip when hovering on info icon', () => {
    cy.visit('/');
    
    cy.get('[data-qa=tooltip-icon]')
      .eq(0)
      .realHover()
    
    cy.get('[data-qa=tooltip-content]')
      .eq(0)
      .should('be.visible')
      
  })
})
