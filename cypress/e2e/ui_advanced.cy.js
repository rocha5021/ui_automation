describe('Testes de UI com dados reais - SauceDemo', () => {
  const usuario = {
    username: 'standard_user',
    password: 'secret_sauce'
  };

   it('Deve fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1000);
    cy.get('[data-test="username"]').type(usuario.username);
    cy.wait(1000);
    cy.get('[data-test="password"]').type(usuario.password);
    cy.wait(1000);
    cy.get('[data-test="login-button"]').click();
    cy.wait(1000);
    cy.url().should('include', '/inventory');
    cy.wait(1000);
    cy.contains('Products').should('be.visible');
    cy.wait(1000);
  });

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1000);
    cy.get('[data-test="username"]').type(usuario.username);
    cy.wait(1000);
    cy.get('[data-test="password"]').type(usuario.password);
    cy.wait(1000);
    cy.get('[data-test="login-button"]').click();
    cy.wait(1000);
    cy.url().should('include', '/inventory');
    cy.wait(1000);
  });

  it('Adicionar produtos ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(1000);
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.wait(1000);
    cy.get('.shopping_cart_badge').should('contain', '2');
    cy.wait(1000);
  });

  it('Verificar produtos no carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(1000);
    cy.get('.shopping_cart_link').click();
    cy.wait(1000);
    cy.url().should('include', '/cart');
    cy.wait(1000);
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.wait(1000);
  });

  it('Finalizar compra com dados válidos', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(1000);
    cy.get('.shopping_cart_link').click();
    cy.wait(1000);
    cy.get('[data-test="checkout"]').click();
    cy.wait(1000);
    cy.get('[data-test="firstName"]').type('João');
    cy.wait(1000);
    cy.get('[data-test="lastName"]').type('Silva');
    cy.wait(1000);
    cy.get('[data-test="postalCode"]').type('12345');
    cy.wait(1000);
    cy.get('[data-test="continue"]').click();
    cy.wait(1000);
    cy.get('[data-test="finish"]').click();
    cy.wait(1000);
    cy.contains('Thank you for your order!').should('be.visible');
    cy.wait(1000);

  });

  it('Realizar logout do sistema', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.wait(1000);
    cy.get('#logout_sidebar_link').click();
    cy.wait(1000);
    cy.url().should('include', 'saucedemo.com');
    cy.wait(1000);

  });
});
