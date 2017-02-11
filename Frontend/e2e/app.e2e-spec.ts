import { Wedding2017Page } from './app.po';

describe('wedding2017 App', function() {
  let page: Wedding2017Page;

  beforeEach(() => {
    page = new Wedding2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
