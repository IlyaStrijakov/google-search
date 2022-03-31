
export default class Base {
    
    async open (url) {
        return browser.url(url);
    }
}
