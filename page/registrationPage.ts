import { Page } from '@playwright/test';
export default class RegistrationPage {
    
    constructor(public page: Page) {}

    async clickRegisterLink() {
        await this.page.click('[href*="register"]');
    }
     
    async enterUserLogin(userlogin: string) {
        await this.page.locator('#user_login')
            .type(userlogin);
    }

    async enterPassword(password: string) {
        await this.page.locator('#user_password')
            .type(password);
    }

    async enterConfirmPassword(confirmpassword: string) {
        await this.page.locator('#user_password_confirmation')
            .type(confirmpassword);
    }

    async enterFirstName(firstname: string) {
        await this.page.locator('#user_firstname')
            .type(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator('#user_lastname')
            .type(lastname);
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

    

    async enterIrkNick(irknick: string) {
        await this.page.locator('#user_custom_field_values_3')
            .type(irknick);
    }
    
    async clickAcceptButton() {
        await this.page.click('//*[@id="new_user"]/input');
    }
    
    
}