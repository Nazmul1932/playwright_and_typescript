import { Locator, Page } from "@playwright/test";

export default class LocatorsOfLoginLogout {

    public readonly usernameXpath: Locator;
    public readonly passwordXpath: Locator;
    public readonly signInXpath: Locator;
    public readonly myProfileCSSSelector: Locator;
    public readonly logoutCSSSelector: Locator;

    constructor(public page: Page){
        this.usernameXpath = this.page.locator("//input[@id='username']");
        this.passwordXpath = this.page.locator("//input[@id='password']");
        this.signInXpath = this.page.locator("//input[@id='kc-login']");
        this.myProfileCSSSelector = this.page.locator("//img[@alt='Profile']");
        this.logoutCSSSelector = this.page.locator("//html/body/div/div[2]/div/div/ul/li[3]/span");
    }
}