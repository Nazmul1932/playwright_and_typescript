import { Locator, Page } from "@playwright/test";

export default class LocatorsOfMerchantRegistration {
    public readonly MERCHANT_MANAGEMENT_MENU: Locator;
    public readonly MERCHANT_SUB_MENU: Locator;
    public readonly ADD_MERCHANT_BUTTON: Locator;
    public readonly EMAIL_FIELD: Locator;
    public readonly PHONE_CODE_DROPDOWN: Locator;
    public readonly PHONE_CODE: Locator;
    public readonly PHONE_NUMBER_1: Locator;
    public readonly MERCHANT_TYPE_DROPDOWN_FIELD: Locator;
    public readonly MERCHANT_TYPE: Locator;
    public readonly MERCHANT_NAME_FIELD: Locator;
    public readonly ADDRESS_1: Locator;
    public readonly TAX_PAYER_ID: Locator;
    public readonly START_TIME: Locator;
    public readonly CONTACT_FIRST_NAME: Locator;
    public readonly CONTACT_LAST_NAME: Locator;
    public readonly CONTACT_EMAIL: Locator;
    public readonly BANK_DROPDOWN: Locator;
    public readonly SELECT_BANK: Locator;
    public readonly BRANCH_DROPDOWN: Locator;
    public readonly SELECT_BRANCH: Locator;
    public readonly ACCOUNT_NUMBER: Locator;
    public readonly ADD_BANK_FOR_MERCHANT: Locator;
    public readonly SAVE_BUTTON: Locator;
    public readonly OK_BUTTON: Locator;
    public readonly TEXT_ASSERT: Locator;


    constructor(public page: Page){

        this.MERCHANT_MANAGEMENT_MENU = this.page.locator("//li[@title='Merchant Management']//div[@class='ant-menu-submenu-title']");
        this.MERCHANT_SUB_MENU = this.page.locator("//li[@title='Merchants']//a[contains(text(),'Merchants')]");
        this.ADD_MERCHANT_BUTTON = this.page.locator("//span[normalize-space()='Add Merchant']");
        this.EMAIL_FIELD = this.page.locator("//input[@type='email']");
        this.PHONE_CODE_DROPDOWN = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[2]/div[1]/uni-email-phone-control[1]/div[1]/nz-form-item[2]/nz-form-control[1]/div[1]/div[1]/nz-input-group[1]/span[1]/span[1]/nz-select[1]/nz-select-top-control[1]");
        this.PHONE_CODE = this.page.locator("//html[1]/body[1]/div[1]/div[2]/div[1]/nz-option-container[1]/div[1]/cdk-virtual-scroll-viewport[1]/div[1]/nz-option-item[1]");
        this.PHONE_NUMBER_1 = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[2]/div[1]/uni-email-phone-control[1]/div[1]/nz-form-item[2]/nz-form-control[1]/div[1]/div[1]/nz-input-group[1]/span[1]/input[1]");
        this.MERCHANT_TYPE_DROPDOWN_FIELD = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/nz-select[1]/nz-select-top-control[1]/nz-select-search[1]/input[1]");
        this.MERCHANT_TYPE = this.page.locator("//html[1]/body[1]/div[1]/div[2]/div[1]/nz-option-container[1]/div[1]/cdk-virtual-scroll-viewport[1]/div[1]/nz-option-item[1]/div[1]");
        this.MERCHANT_NAME_FIELD = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[2]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.ADDRESS_1 = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[4]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.TAX_PAYER_ID = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[9]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.START_TIME = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[10]/nz-form-control[1]/div[1]/div[1]/nz-time-picker[1]/div[1]/input[1]");
        this.CONTACT_FIRST_NAME = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[14]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.CONTACT_LAST_NAME = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[15]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.CONTACT_EMAIL = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/nz-form-item[16]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.BANK_DROPDOWN = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/form[1]/div[1]/div[1]/div[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/nz-select[1]/nz-select-top-control[1]/nz-select-search[1]/input[1]");
        this.SELECT_BANK = this.page.locator("//html[1]/body[1]/div[1]/div[2]/div[1]/nz-option-container[1]/div[1]/cdk-virtual-scroll-viewport[1]/div[1]/nz-option-item[2]/div[1]");
        this.BRANCH_DROPDOWN = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/form[1]/div[1]/div[1]/div[1]/nz-form-item[2]/nz-form-control[1]/div[1]/div[1]/nz-select[1]/nz-select-top-control[1]/nz-select-search[1]/input[1]");
        this.SELECT_BRANCH = this.page.locator("//html[1]/body[1]/div[1]/div[2]/div[1]/nz-option-container[1]/div[1]/cdk-virtual-scroll-viewport[1]/div[1]/nz-option-item[1]/div[1]");
        this.ACCOUNT_NUMBER = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/form[1]/div[1]/div[1]/div[1]/nz-form-item[3]/nz-form-control[1]/div[1]/div[1]/input[1]");
        this.ADD_BANK_FOR_MERCHANT = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[3]/form[1]/div[1]/div[1]/div[1]/nz-form-item[4]/nz-form-control[1]/div[1]/div[1]/div[1]/div[1]/button[1]");
        this.SAVE_BUTTON = this.page.locator("//html[1]/body[1]/uni-root[1]/uni-dashboard[1]/nz-spin[1]/div[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/nz-spin[1]/div[1]/div[1]/uni-merchant-editor[1]/nz-spin[1]/div[1]/form[1]/div[4]/button[1]");
        this.OK_BUTTON = this.page.locator("//html[1]/body[1]/div[1]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[2]/button[1]");
        this.TEXT_ASSERT = this.page.locator("//p[@class='modal-content']");
    }
}


