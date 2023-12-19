import { LoginPage } from "../pageobjects/LoginPage";
describe('template spec', () => {
  const loginPage = new LoginPage();
  it('passes', () => {
    loginPage.doLogin();
  })
})