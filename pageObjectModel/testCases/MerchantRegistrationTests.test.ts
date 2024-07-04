import {Browser, Page, chromium, BrowserContext} from "@playwright/test";
import LoginLogoutPage from "../pages/loginLogoutPage";
import MerchantRegistrationPage from "../pages/MerchantRegistrationPage";
import {test} from "../fixture/myFixture";
import assert = require("node:assert");

let browser: Browser;
let context: BrowserContext
let page: Page;
let loginLogoutPage: LoginLogoutPage;
let merchantRegistrationPage: MerchantRegistrationPage;

test.beforeEach(async ({ baseurl, username, password}) => {
    browser = await chromium.launch({headless: false,args: ['--allow-running-insecure-content','--disable-web-security','--ignore-certificate-errors']});
    context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
    await context.tracing.start({ screenshots: true, snapshots: true });
    page = await context.newPage();
    await page.setViewportSize({ width: 1500, height: 720 });

    loginLogoutPage = new LoginLogoutPage(page);
    merchantRegistrationPage = new MerchantRegistrationPage(page);

    await page.goto(baseurl);
    await loginLogoutPage.enterUserName(username);
    await loginLogoutPage.enterPassword(password);
    await loginLogoutPage.clickSignIn();
});
test.afterEach(async () => {
    await context.tracing.stop({ path: 'trace.zip' });
    await page.close();
    await context.close();
    await browser.close();
});
test.describe("Merchant Management", () => {
    test("Test Merchant Registration", async () => {
        await merchantRegistrationPage.clickMerchantManagementMenu();
        await merchantRegistrationPage.clickMerchantsSubMenu();
        await merchantRegistrationPage.clickAddMerchantButton();
        await merchantRegistrationPage.setMerchantEmail();
        await merchantRegistrationPage.setMerchantPhoneNumber1();
        await merchantRegistrationPage.selectMerchantType();
        await merchantRegistrationPage.setMerchantName();
        await merchantRegistrationPage.setAddress1();
        await merchantRegistrationPage.setTaxPayerID();
        await merchantRegistrationPage.setStartTime();
        await merchantRegistrationPage.setContactFirstName();
        await merchantRegistrationPage.setContactLastName();
        await merchantRegistrationPage.setContactEmail();
        await merchantRegistrationPage.selectBank();
        await merchantRegistrationPage.selectBranch();
        await merchantRegistrationPage.setAccountNumber();
        await merchantRegistrationPage.clickAddBankButton();
        await merchantRegistrationPage.clickSaveButton();
        let text = await merchantRegistrationPage.getText();
        assert.equal(text, "Merchant Added Successfully");
        await merchantRegistrationPage.clickOkButton();
        await page.waitForTimeout(2000);
        await loginLogoutPage.clickLoginUserName();
        await loginLogoutPage.clickLogout();
    });
});
