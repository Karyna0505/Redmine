import { expect, Locator, Page } from '@playwright/test';
export default class RegistrationPage {

    readonly page: Page;
    readonly registerLink: Locator;
    readonly registerForm: Locator;
    readonly userLoginInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPassword: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly emailField: Locator;
    readonly dropDown:  Locator
    readonly acceptButton: Locator;
    readonly ircNick: Locator; 
    readonly acceptNotice: Locator;
    readonly errorMessage: Locator;
    
    constructor(page: Page) {

        this.page = page;
        this.registerLink = page.locator('[href*="register"]');
        this.registerForm = page.locator('#new_user');
        this.userLoginInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.confirmPassword = page.locator('#user_password_confirmation');
        this.firstName = page.locator('#user_firstname');
        this.lastName = page.locator('#user_lastname');
        this.emailField = page.locator('#user_mail');
        this.dropDown = page.locator('#user_language');
        this.acceptButton = page.locator('//*[@id="new_user"]/input');
        this.ircNick = page.locator('#user_custom_field_values_3');
        this.acceptNotice = page.locator('#flash_notice');
        this.errorMessage = page.locator('#errorExplanation > ul > li');
    }
    
    async clickRegisterLink() {
        await this.registerLink.click();
        expect(this.registerForm).toBeVisible();
    }
     
    async enterUserLogin(userLogin: string) {
        await this.userLoginInput.type(userLogin);
        await expect(this.userLoginInput).not.toBeEmpty();
    }

    async enterPassword(password: string) {
        await this.passwordInput.type(password);
        await expect(this.passwordInput).not.toBeEmpty();
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.type(confirmPassword);
        await expect(this.confirmPassword).not.toBeEmpty();
    }

    async enterFirstName(firstName: string) {
        await this.firstName.type(firstName);
        await expect(this.firstName).not.toBeEmpty();
    }

    async enterLastName(lastName: string) {
        await this.lastName.type(lastName);
        await expect(this.lastName).not.toBeEmpty();
    }

    async enterEmail(email: string) {
        await this.emailField.type(email);
        await expect(this.emailField).not.toBeEmpty();
    }
    
    async clickDropDownLanguage () {
        await this.dropDown.selectOption({ label: 'Ukrainian (Українська)' });
    }

    
    async enterIrcNick(ircNick: string) {
        await this.ircNick.type(ircNick);
        await expect(this.ircNick).toBeEmpty();
    }
    
    async clickAcceptButton() {
        await this.acceptButton.click();
    }
    
    
}