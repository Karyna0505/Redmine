import { expect, Locator, Page } from '@playwright/test';
export default class SearchPage {
    readonly page: Page;
    readonly searchField: Locator;
    readonly searchResult: Locator;
    readonly noFoundMessage: Locator;

    constructor(page: Page) {
        this.searchField = page.locator('//*[@id="q"]');
        this.searchResult = page.locator('#search-results');
        this.noFoundMessage = page.locator('#search-results-counts');
    }
    

    async clickSearchField() {
        await this.searchField.click();
        expect(this.searchField).toBeFocused();
    }

    
    async enterSearchField(search: string) {
        await this.searchField.type(search);
        await expect(this.searchField).not.toBeEmpty();
        await this.searchField.press('Enter');
    }
    

}