'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myApp', function() {

  it('should automatically redirect', function() {
    browser.get('github-issues.html');
    expect(browser.getLocationAbsUrl()).toMatch("/app/issues/views/");
  });


  describe('issues', function() {
    beforeEach(function() {
      browser.get('/issues');
    });


    it('should render issues when user navigates to /issues', function() {
      expect(element.all(by.css('header-title')).first().getText()).
        toMatch(/angular angular.js/);
    });

  });

});
