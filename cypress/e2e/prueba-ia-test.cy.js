const productName = 'MacBook Pro';

describe('Carrito WinstonCastillo ecommerce', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('agrega un MacBook Pro y navega al login de checkout', () => {
    cy.get('#logo img').should('be.visible');

    cy.searchProduct(productName);
    cy.contains('.product-thumb h4 a', productName).should('be.visible').click();

    cy.get('h1').should('contain', productName);
    cy.get('#button-cart').click();

    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', productName)
      .find('.btn-close')
      .first()
      .click();

    cy.get('#header-cart button').should('contain', '1 item');
    cy.openCartDropdown();
    cy.get('#header-cart').within(() => {
      cy.contains('a', 'Checkout').click();
    });

    cy.url().should('include', 'route=checkout/checkout');
    /* cy.get('#content').within(() => {
      cy.contains('Shopping Cart').should('be.visible');
      cy.contains(productName).should('be.visible');
      cy.contains('a, button', 'Checkout').first().click();
    }); */

    cy.url().should('include', 'route=checkout/checkout');
    cy.get('#content').should('be.visible');
    cy.contains('Checkout').should('be.visible');
  });
});
