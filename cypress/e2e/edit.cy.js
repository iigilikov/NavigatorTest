import { LoginPage } from "../pageobjects/LoginPage";
import { EditPage} from "../pageobjects/EditPage";

describe('Login suite', () => {
  const loginPage = new LoginPage();
  const editPage = new EditPage();

  it('should do login', () => {
    loginPage.doLogin();
    cy.wait(1000)
    cy.visit('http://167.114.201.175:5000/notifications')
    cy.wait(1000)
    editPage.EditForm();
  
  });
});

