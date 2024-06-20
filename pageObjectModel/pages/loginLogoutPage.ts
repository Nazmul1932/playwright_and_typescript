import { Locator, Page } from "@playwright/test";
import LocatorsOfLoginLogout from "./Locators/LocatorsOfLoginLogout";

export default class LoginLogoutPage extends LocatorsOfLoginLogout{

    constructor(public page: Page){
        super(page);
    }

    async enterUserName(username: string){
        await this.usernameXpath.fill(username);
    }
    async enterPassword(password: string){
        await this.passwordXpath.fill(password);
    }
    async clickSignIn(){
        await this.signInXpath.click();
    }
    async clickLoginUserName(){
        await this.myProfileCSSSelector.click();
    }
    async clickLogout(){
        await this.logoutCSSSelector.click();
    }

    // async login(username, password){
    //     await this.enterUserName(username);
    //     await this.enterPassword(password);
    //     await this.clickSignIn();
    // }
    //
    // async logout(){
    //     await this.clickLoginUserName();
    //     await this.clickLogout();
    // }
}