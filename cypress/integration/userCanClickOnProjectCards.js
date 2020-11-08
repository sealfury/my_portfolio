
describe("User can click on project cards", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#projects-tab").click();
    });

    it("links to first project", () => {
        cy.get("#project-1").click();
        cy.get(".link").should("contain", "https://github.com/sealfury"); 
    });

    it("links to second project", () => {
        cy.get("#project-2").click();
        cy.get(".link").should("contain", "https://github.com/sealfury"); 
    });
}) 