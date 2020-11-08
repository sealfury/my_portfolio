describe("User can see list of jobs and education", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#CV-tab").click();
    });

    it("displays first job", () => {
        cy.get("#job-1").within(() => {
            cy.get(".name").should("contain", "RG21");
            cy.get(".description").should(
                "contain",
                "Fast fine dining in the heart of Stockholm City"
            );
            cy.get(".year").should("contain", "2019");
        });     
    });

    it("displays second project", () => {
        cy.get("#job-2").within(() => {
            cy.get(".name").should("contain", "Geronimos");
            cy.get(".description").should(
                "contain",
                "Tex-Mex food in an Classic Rock/Americana setting, located in Gamla Stan.  Also providing food to legendary jazz & blues club, Stampen."
            );
            cy.get(".year").should("contain", "2016-2019");
        });
    });

   
});