import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    projects:[
        {
            name:"chrome", use:{...devices['Desktop Chrome']}
        },
        {
            name:"firefox", use:{...devices['Desktop Firefox']}
        }
    ],
    testMatch: ["pageObjectModel/testCases/MerchantRegistrationTests.test.ts"],
    use:{
        headless: false,
        screenshot: "on",
        video: "on"
    },
    reporter:[
        ["dot"], 
        ["json",{outputFile: "jsonReports/jsonReport.json"}], 
        ["html",{outputFile: "htmlReports/htmlReport.html", open:"never"}]
    ]
}

export default config;