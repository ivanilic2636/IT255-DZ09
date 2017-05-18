import { Primer1Page } from './app.po';

describe('primer1 App', function() {
  let page: Primer1Page;

  beforeEach(() => {
    page = new Primer1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
