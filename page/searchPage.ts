import { Page } from '@playwright/test';
export default class SearchPage {
    

    get searchField() {
        return this.page.locator('//*[@id="q"]');
    }

    constructor(public page: Page) {}

    
    

    async clickSearchField() {
        await this.page.click('//*[@id="q"]');
    }

    
    async enterSearchField(search: string) {
        
        await this.searchField.type(search);
    }
    

}