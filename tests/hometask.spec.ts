import { test, expect } from '@playwright/test';
import RegistrationPage from '../page/registrationPage';
import AutorizationPage from '../page/autorizationPage';
import SearchPage from '../page/searchPage';

let email = (Math.random() + 1).toString(36).substring(5) + '@example.com';
let login = (Math.random() + 1).toString(36).substring(5);
test('Registration on the site with valid data.', async ({ page, baseURL}) => {

    const register = new RegistrationPage(page);
    await page.goto(`${baseURL}`);
    await register.clickRegisterLink();
    await register.enterUserLogin(login);
    await register.enterPassword("7PutG1xPjbRn1pD");
    await register.enterConfirmPassword("7PutG1xPjbRn1pD");
    await register.enterFirstName("User");
    await register.enterLastName("User");
    await register.enterEmail(email);
    await register.clickDropDownLanguage();
    await register.clickLanguage();
    await register.enterIrkNick("");
    await register.clickAcceptButton();
    await page.waitForTimeout(3000);
    await expect(page.locator('#flash_notice')).toBeVisible();
    
})

test('Registration on the site with invalid data (empty fields).',  async ({page, baseURL}) => {
    
    const register2 = new RegistrationPage(page);
    await page.goto(`${baseURL}`);
    await register2.clickRegisterLink();
    await register2.enterUserLogin("");
    await register2.enterPassword("");
    await register2.enterConfirmPassword("");
    await register2.enterFirstName("");
    await register2.enterLastName("");
    await register2.enterEmail("");
    await register2.enterIrkNick("");
    await register2.clickAcceptButton();
    await page.waitForTimeout(3000);
    await expect(page.locator('#errorExplanation')).toBeVisible();


})

test('Authorization on the site with valid data.', async ({ page, baseURL}) => {
    let loginIn = 'gonegirl';
    const signIn = new AutorizationPage(page);
    await page.goto(`${baseURL}`);
    await signIn.clickSignInLink();
    await page.waitForTimeout(1000);
    await signIn.enterUserLogin(loginIn);
    await signIn.enterPassword('GEDXbBAT6PNTmW7');
    await signIn.clickLoginButton();
    await page.waitForTimeout(2000);
    await expect(page.locator('#loggedas>a')).toHaveText([loginIn]);

})

test('Search results with valid entered data.', async ({ page, baseURL}) => {

    const searchValid = new SearchPage(page);
    await page.goto(`${baseURL}`);
    await searchValid.clickSearchField();
    await searchValid.enterSearchField("install");
    await searchValid.searchField.press('Enter');
    await page.waitForTimeout(3000);
    expect(page.locator('#search-results', { hasText: 'install' }));
    
})

test('Search results with invalid entered data.', async ({ page, baseURL}) => {

    const searchValid = new SearchPage(page);
    await page.goto(`${baseURL}`);
    await searchValid.clickSearchField();
    await searchValid.enterSearchField("kitchen2345");
    await searchValid.searchField.press('Enter');
    await page.waitForTimeout(3000);
    expect(page.locator('#search-results-counts', { hasText: 'Results (0)' }));
    
})

