import { faker } from '@faker-js/faker';

export class EditPage{

    clickButtonField(){return cy.get ('td.crm-navigator-table__divider:first');}
    nameField() {return cy.get('input[placeholder="Тема сообщения"]');}
    savebutton() {return cy.get('div.push-col-save').click()};
    

    EditForm(nameText=faker.person.fullName()){
        this.clickButtonField().click();
        this.nameField().clear();
        this.nameField().type(nameText);
        this.savebutton().click();
    }
}