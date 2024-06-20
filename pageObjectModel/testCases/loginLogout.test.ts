import {chromium} from "@playwright/test";
import LoginLogoutPage from "../pages/loginLogoutPage";
import {test} from "../fixture/myFixture";
import { log } from "console";



test.describe("Authentication Tests", () => {
    test("Login Logout", async({baseurl, username, password})=>{

        const browser = await chromium.launch({
            headless: false,
            args: [
              '--allow-running-insecure-content',
              '--disable-web-security',
              '--ignore-certificate-errors'
            ]
          });
        const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
        const page = await context.newPage();
        const loginLogoutPage = new LoginLogoutPage(page);
    
        await page.goto(baseurl);
        await loginLogoutPage.enterUserName(username);
        await loginLogoutPage.enterPassword(password);
        await loginLogoutPage.clickSignIn();
        await loginLogoutPage.clickLoginUserName();
        await loginLogoutPage.clickLogout();

        
    
    
    })
})