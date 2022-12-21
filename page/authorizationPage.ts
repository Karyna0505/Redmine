import { Page } from '@playwright/test';
export default class AuthorizationPage {

    constructor(public page: Page) {}
  
    async clickSignInLink() {
        await this.page.click('[href="/login"]');
    }

    async enterUserLogin(userLogin: string) {
        await this.page.locator('//*[@id="username"]')
            .type(userLogin);
    }

    async enterPassword(password: string) {
        await this.page.locator('#password')
            .type(password);
    }
    
    async clickLoginButton() {
        await this.page.click('[type="submit"]');
    }

    
}