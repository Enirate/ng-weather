import { NgWeatherPage } from './app.po';

describe('ng-weather App', function() {
  let page: NgWeatherPage;

  beforeEach(() => {
    page = new NgWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
