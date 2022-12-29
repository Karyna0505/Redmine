import { test, expect } from '@playwright/test';
import RegistrationPage from '../page/registrationPage';
import AuthorizationPage from '../page/authorizationPage';
import SearchPage from '../page/searchPage';

let email = (Math.random() + 1).toString(36).substring(5) + '@example.com';
let login = (Math.random() + 1).toString(36).substring(5);
let password = (Math.random() + 1).toString(36).substring(5) + '@example';
let loginIn = 'gonegirl';
let passwordLogin = 'GEDXbBAT6PNTmW7';
let userName = 'User';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
});

test.afterEach(async ({ page }, testInfo) => {
    await testInfo.attach("basic-page-screen", {
        body: await page.screenshot(),
        contentType: "image/png",
      });
})

test('ID_0001 Checking registration form on the site with valid data', async ({ page }) => {

    const register = new RegistrationPage(page);
    await register.clickRegisterLink();
    await register.enterUserLogin(login);
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    await register.enterFirstName(userName);
    await register.enterLastName(userName);
    await register.enterEmail(email);
    await register.clickDropDownLanguage();
    await register.enterIrcNick("");
    await register.clickAcceptButton();
    await expect(register.acceptNotice).toContainText('Account was successfully created.');
    
})

test('ID_0002 Checking registration form on the site with invalid data (empty field)',  async ({ page }) => {
    
    const registerEmptyField = new RegistrationPage(page);
    await registerEmptyField.clickRegisterLink();
    await registerEmptyField.clickAcceptButton();
    await expect(registerEmptyField.errorMessage).toContainText([
    'Login can\'t be blank',
    'First name can\'t be blank',
    'Last name can\'t be blank',
    'Email can\'t be blank',
    'Password is too short (minimum is 4 characters)']);

})

test('ID_0003 Checking authorization on the site with valid data', async ({ page }) => {
    
    const signIn = new AuthorizationPage(page);
    await signIn.clickSignInLink();
    await signIn.enterUserLogin(loginIn);
    await signIn.enterPassword(passwordLogin);
    await signIn.clickLoginButton();
    await expect(signIn.userActive).toHaveText([loginIn]);

})

test('ID_0004 Checking search results with entered valid data.', async ({ page }) => {

    const searchValid = new SearchPage(page);
    await searchValid.clickSearchField();
    await searchValid.enterSearchField("install");
    expect((searchValid.searchResult, { hasText: 'install'}));

})

test('ID_0005 Checking search results with entered invalid data.', async ({ page }) => {

    const searchInValid = new SearchPage(page);
    await searchInValid.clickSearchField();
    await searchInValid.enterSearchField(login);
    expect((searchInValid.noFoundMessage, { hasText: 'Results (0)' }));
    
})

