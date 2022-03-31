
import Base from './base';

class SearchPage extends Base {
   
    get googleSearchInputField () {
        return $('//form[@role="search"]//input[@type="text"]');
    }

    get btnSearch () {
        return $('(//input[@value="Google Search"])[1]');
    }

    link (searchQuery) {
        return $(`//h3[text()="${searchQuery}"]/..`);
    }

    headerTag (searchQuery) {
        return $(`//h1[@class="hidden" and contains(text(),"${searchQuery}")]`);
    }

    async waitForPageToLoad () {
        await browser.waitUntil (
            () => browser.execute (() => document.readyState === 'complete'),
            {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'Failed to load'
            }
        );
    }

}

export default new SearchPage ();