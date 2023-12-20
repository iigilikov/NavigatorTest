export class CreatePage{

    clickButtonField(){return cy.get('a.crm-navigation__link[href="/companies"]').click()};
    ButtonToAdd(){return cy.get ("button.clients-add-user-dialog:contains('Добавить организацию')");}
    CompNameField(){return cy.get ('input[formcontrolname="companyName"]');}
    TradeNameField(){return cy.get ('input[formcontrolname="tradeName"]');}
    CommentNameField(){return cy.get ('textarea[formcontrolname="comment"]');}
    OccupationNameField(){return cy.get ('mat-select[formcontrolname="occupation"]');}
    ITAddField(){return cy.get ("span.mat-option-text:contains('IT')");}
    ButtonToSaveField(){return cy.get ("button.save:contains('Сохранить')");}
    

    CreateForm(CompnameText="AlbanIndus", TradenameText="GIVEmeMYMoney", CommnameText="This is my final job"){
        this.clickButtonField().click();
        cy.wait(1000)
        this.ButtonToAdd().click();
        cy.wait(1000)
        this.CompNameField().type(CompnameText);
        cy.wait(1000)
        this.TradeNameField().type(TradenameText);
        cy.wait(1000)
        this.CommentNameField().type(CommnameText);
        cy.wait(1000)
        this.OccupationNameField().click();
        cy.wait(1000)
        this.ITAddField().click();
        cy.wait(1000)
        this.ButtonToSaveField().click();
    }
}