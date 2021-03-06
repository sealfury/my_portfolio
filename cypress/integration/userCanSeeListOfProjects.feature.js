
describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#projects-tab").click();
    });

    it("displays first project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "My First Website");
            cy.get(".description").should(
                "contain",
                "Definitely nothing about elections here"
            );
        });     
    });

    it("displays second project", () => {
        cy.get("#project-2").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "FizzBuzz");
            cy.get(".description").should(
                "contain",
                "This was actually the first project"
            );
        });
    });

   
});
