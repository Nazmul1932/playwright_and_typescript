import {test as baseTest} from "@playwright/test";
import LoginLogoutPage from "../pages/loginLogoutPage";
import MyProfilePage from "../pages/myProfilePage";

type pages = {
    loginLogoutPage: LoginLogoutPage;
    myProfilePage: MyProfilePage;
}

const testPages = baseTest.extend<pages>({
    loginLogoutPage: async ({page}, use) => {
        await use(new LoginLogoutPage(page));
    },
    myProfilePage: async ({page}, use) => {
        await use(new MyProfilePage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
