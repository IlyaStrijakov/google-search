import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';


const pages = {
    login: LoginPage
}

Given('I search for google page', async (path) => {
    await LoginPage.open(path);
});

When('I type testRun in search field', async () => {
    await LoginPage.googleSearchIF.setValue("TestRun");
    await LoginPage.btnSearch.click();
});

Then('I click on {string} returned result', async (linkName) => {
    await LoginPage.rtsLabsLink(linkName).click();
});

