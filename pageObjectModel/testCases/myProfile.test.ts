import {Browser, Page, chromium, BrowserContext} from "@playwright/test";
import LoginLogoutPage from "../pages/loginLogoutPage";
import MyProfilePage from "../pages/myProfilePage";
import {test} from "../fixture/myFixture";


let browser: Browser;
let context: BrowserContext
let page: Page;
let loginLogoutPage: LoginLogoutPage;
let myProfilePage: MyProfilePage;

test.beforeEach(async ({ baseurl, username, password}) => {
  browser = await chromium.launch({headless: false,args: ['--allow-running-insecure-content','--disable-web-security','--ignore-certificate-errors']});
  context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
  page = await context.newPage();
  await page.setViewportSize({ width: 1500, height: 720 });
  
  loginLogoutPage = new LoginLogoutPage(page);
  myProfilePage = new MyProfilePage(page);

  await page.goto(baseurl);
  await loginLogoutPage.enterUserName(username);
  await loginLogoutPage.enterPassword(password);
  await loginLogoutPage.clickSignIn();
});

test.afterEach(async () => {
  await page.close();
  await context.close();
  await browser.close();
  });


  test.describe("My Profile Tests", () => {
    test("Clicking My Profile", async () => {
      await loginLogoutPage.clickLoginUserName();
      await myProfilePage.clickMyProfile();
      await loginLogoutPage.clickLoginUserName();
      await loginLogoutPage.clickLogout();
    });
  });