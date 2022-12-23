import { expect, Locator, Page } from '@playwright/test';
export default class AuthorizationPage {

    readonly page: Page;
    readonly signInLink: Locator;
    readonly loginForm: Locator;
    readonly userLoginField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;
    readonly userActive: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.signInLink = page.locator('[href="/login"]');
        this.loginForm = page.locator('tbody');
        this.userLoginField = page.locator('//*[@id="username"]');
        this.passwordField = page.locator('#password');
        this.signInButton = page.locator('[type="submit"]');
        this.userActive = page.locator('#loggedas>a');
    }
    
    async clickSignInLink() {
        await this.signInLink.first().click();
        await expect(this.loginForm).toBeVisible();
    }

    async enterUserLogin(userLogin: string) {
        await this.userLoginField.type(userLogin);
        await expect(this.userLoginField).not.toBeEmpty();
        
    }

    async enterPassword(password: string) {
        await this.passwordField.type(password);
        await expect(this.passwordField).not.toBeEmpty();
    }
    
    async clickLoginButton() {
        await this.signInButton.click();
        
    }

    
}