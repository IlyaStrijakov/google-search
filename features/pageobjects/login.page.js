

import Page from './page';

class LoginPage extends Page {
   
    get googleSearchIF () {
        return $('//input[@type="search"]');
    }

    get btnSearch () {
        return $('(//input[@value="Google Search"])[1]');
    }

    rtsLabsLink (linkName) {
        return $(`//div[@role="link" and .="${linkName}"]`)
    }
    
}

export default new LoginPage();
