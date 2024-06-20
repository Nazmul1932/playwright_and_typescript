import { Locator, Page } from "@playwright/test";

export default class MyProfilePage{
    private readonly myProfileSelector: Locator;

    constructor(public page: Page){
        this.myProfileSelector = this.page.locator("//span[normalize-space()='My profile']");
    }

    async clickMyProfile(){
        await this.myProfileSelector.click();
    }
}