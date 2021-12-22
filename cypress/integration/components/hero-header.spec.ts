describe('Brand component', () => {
  it('should render without problems', () => {
    cy.visit("http://localhost:3000")
    cy.get(".hero-heading").contains("Travel stays designed for living")
  })
})