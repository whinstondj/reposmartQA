// Simple helpers to keep tests readable and encapsulate page intent.
// Prefer data-* selectors when possible; here we use stable attributes from the UI.

Cypress.Commands.add('searchProduct', (term) => {
  cy.get('#search input[name="search"]').clear().type(term);
  cy.get('#search button[type="button"]').click();
  cy.url().should('include', `search=${encodeURIComponent(term)}`);
});

Cypress.Commands.add('openCartDropdown', () => {
  cy.get('#header-cart button.dropdown-toggle').first().click();
  cy.get('#header-cart .dropdown-menu').should('be.visible');
});
