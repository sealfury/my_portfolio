
describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#projects-tab").click();
    });

    it("displays first project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "My First Website");
            cy.get(".description").should(
                "contain",
                "Definitely nothing about elections here"
            );
        });     
    });

    it("displays second project", () => {
        cy.get("project-2").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "FizzBuzz");
            cy.get(".description").should(
                "contain",
                "This was actually the first project"
            );
        });
    });

    it("displays third project", () => {
        cy.get("project-3").within(() => {
            cy.get(".image").should("exist");
            cy.get("ui.header").should("contain", "ATM Challenge")
            cy.get(".description").should(
                "contain",
                "So far, I think I prefer JS to Ruby"
            );
        });
    });
});
