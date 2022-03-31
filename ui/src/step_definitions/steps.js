
const expect = require('chai').expect;
import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pages/search-page';


Given('I open {string} page', async (url) => {
    await SearchPage.open(url);
});

When('I type {string} in search field', async (searchQuery) => {
    await SearchPage.waitForPageToLoad();
    await SearchPage.googleSearchInputField.setValue(searchQuery);
    await SearchPage.btnSearch.waitForDisplayed();
    await SearchPage.btnSearch.click();
});

When('I click on {string} link', async (searchQuery) => {
    await SearchPage.link(searchQuery).waitForDisplayed();
    await SearchPage.link(searchQuery).click();
});

Then('I verify I am on the {string} page', async (searchQuery) => {
    await SearchPage.waitForPageToLoad();
    expect(await SearchPage.headerTag(searchQuery).isExisting()).to.eql(true);
});



