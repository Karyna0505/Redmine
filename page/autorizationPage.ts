import { Page } from '@playwright/test';
export default class AutorizationPage {

    constructor(public page: Page) {}
  
    async clickSignInLink() {
        await this.page.click('[href="/login"]');
    }

    async enterUserLogin(userlogin: string) {
        await this.page.locator('//*[@id="username"]')
            .type(userlogin);
    }

    async enterPassword(password: string) {
        await this.page.locator('#password')
            .type(password);
    }
    
    async clickLoginButton() {
        await this.page.click('[type="submit"]');
    }

    
}