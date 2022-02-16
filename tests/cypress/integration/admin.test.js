describe("Admin can login and make sure plugin is activated", () => {
  it("Permalink structure works", () => {
    cy.visitAdminPage('options-general.php?page=wp-htaccess-editor');
    cy.get('.toggle-card').click();
    cy.get('.wphe-dismiss-notice').click();
    cy.screenshot();
    cy.visit("/hello-world");
  });
});
