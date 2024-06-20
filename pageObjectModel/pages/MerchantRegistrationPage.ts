import { Locator, Page } from "@playwright/test";
import {faker, tr} from '@faker-js/faker';
import LocatorsOfMerchantRegistration from "./Locators/LocatorsOfMerchantRegistration";

export default class MerchantRegistrationPage extends LocatorsOfMerchantRegistration{

    constructor(public page: Page){
        super(page);
    }
    async clickMerchantManagementMenu(){
        await this.MERCHANT_MANAGEMENT_MENU.click();
    }
    async clickMerchantsSubMenu(){
        await this.MERCHANT_SUB_MENU.click();
    }
    async clickAddMerchantButton(){
        await this.ADD_MERCHANT_BUTTON.click();
    }
    async setMerchantEmail(){
        await this.EMAIL_FIELD.fill(`${faker.internet.userName()}@yopmail.com`);
    }
    async setMerchantPhoneNumber1(){
        await this.PHONE_CODE_DROPDOWN.click();
        await this.PHONE_CODE.click();
        await this.PHONE_NUMBER_1.fill(faker.string.numeric({length:7, allowLeadingZeros:false}));
    }
    async selectMerchantType(){
        await this.MERCHANT_TYPE_DROPDOWN_FIELD.click();
        await this.MERCHANT_TYPE.click();
    }
    async setMerchantName(){
        await this.MERCHANT_NAME_FIELD.fill(faker.internet.userName());
    }
    async setAddress1(){
        await this.ADDRESS_1.fill(faker.address.streetAddress({useFullAddress: true}));
    }
    async setTaxPayerID(){
        await this.TAX_PAYER_ID.fill(String(faker.internet.port()));
    }
    async setStartTime(){
        await this.START_TIME.fill("07:30 AM")
    }
    async setContactFirstName(){
        await this.CONTACT_FIRST_NAME.fill(faker.person.firstName('male'))
    }
    async setContactLastName(){
        await this.CONTACT_LAST_NAME.fill(faker.person.lastName('female'))
    }
    async setContactEmail(){
        await this.CONTACT_EMAIL.scrollIntoViewIfNeeded();
        await this.CONTACT_EMAIL.fill(`${faker.internet.userName()}@yopmail.com`);
    }
    async selectBank(){
        await this.BANK_DROPDOWN.click()
        await this.SELECT_BANK.click()
    }
    async selectBranch(){
        await this.BRANCH_DROPDOWN.click()
        await this.SELECT_BRANCH.click()
    }
    async setAccountNumber(){
        await this.ACCOUNT_NUMBER.scrollIntoViewIfNeeded();
        await this.ACCOUNT_NUMBER.fill(faker.internet.password())
    }
    async clickAddBankButton(){
        await this.ADD_BANK_FOR_MERCHANT.scrollIntoViewIfNeeded();
        await this.ADD_BANK_FOR_MERCHANT.click()
    }
    async clickSaveButton(){
        await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.SAVE_BUTTON.click()
    }
    async clickOkButton(){
        await this.OK_BUTTON.click()
    }

    async getText(){
        return await this.TEXT_ASSERT.textContent();
    }

}