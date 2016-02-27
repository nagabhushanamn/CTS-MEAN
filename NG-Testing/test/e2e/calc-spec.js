/**
 * http://usejsdoc.org/
 */

describe('calc app test suite', function() {

	it('should have a title', function() {
		browser.get('http://localhost:57314');
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add one and two', function() {
		browser.get('http://localhost:57314');

		element(by.model('first')).sendKeys(10);
		element(by.model('second')).sendKeys(20);

		element(by.id('gobutton')).click();

		expect(element(by.binding('latest')).getText()).toEqual('30');
	});
	
	

});