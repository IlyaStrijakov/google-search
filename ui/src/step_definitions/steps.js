
const expect = require('chai').expect;
import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pages/search-page';


Given('I open {string} page', async (url) => {
    await SearchPage.open(url);
});

When('I type {string} in search field', async (searchQuery) => {
    await SearchPage.googleSearchInputField.setValue(searchQuery);
    await SearchPage.btnSearch.waitForDisplayed();
    await SearchPage.btnSearch.click();
    //await browser.pause(2000); // For visual purposes only. Uncomment if necessary.
});

When('I click on {string} link', async (searchQuery) => {
    await SearchPage.link(searchQuery).waitForDisplayed();
    await SearchPage.link(searchQuery).click();
    //await browser.pause(2000); // For visual purposes only. Uncomment if necessary.
});

Then('I verify I am on the {string} page', async (searchQuery) => {
    let actualLogoName = await SearchPage.headerTag(searchQuery).getText();
    let expectedLogoName = await SearchPage.headerTag(searchQuery).getText();
    expect(actualLogoName).to.eql(expectedLogoName);
});



