import { LoginPage } from "../pageobjects/LoginPage";
import { CreatePage} from "../pageobjects/CreatePage";

describe('Login suite', () => {
  const loginPage = new LoginPage();
  const createPage = new CreatePage();

  it('should do login', () => {
    loginPage.doLogin();
    cy.wait(1000)
    cy.visit('http://167.114.201.175:5000/companies')
    cy.wait(1000)
    createPage.CreateForm();
  
  });
});

