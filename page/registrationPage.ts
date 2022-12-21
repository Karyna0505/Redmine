import { Page } from '@playwright/test';
export default class RegistrationPage {
    
    constructor(public page: Page) {}

    async clickRegisterLink() {
        await this.page.click('[href*="register"]');
    }
     
    async enterUserLogin(userLogin: string) {
        await this.page.locator('#user_login')
            .type(userLogin);
    }

    async enterPassword(password: string) {
        await this.page.locator('#user_password')
            .type(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.page.locator('#user_password_confirmation')
            .type(confirmPassword);
    }

    async enterFirstName(firstName: string) {
        await this.page.locator('#user_firstname')
            .type(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator('#user_lastname')
            .type(lastName);
    }

    async enterEmail(email: string) {
        await this.page.locator('#user_mail')
            .type(email);
    }
    
    async clickDropDownLanguage () {
        await this.page.click('#user_language');
    }
    

    async clickLanguage() {
        await this.page.locator('select').selectOption({ label: 'Ukrainian (Українська)' });
    }

    

    async enterIrkNick(irkNick: string) {
        await this.page.locator('#user_custom_field_values_3')
            .type(irkNick);
    }
    
    async clickAcceptButton() {
        await this.page.click('//*[@id="new_user"]/input');
    }
    
    
}