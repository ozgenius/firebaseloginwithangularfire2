import { Loginfirebasewithangular4Page } from './app.po';

describe('loginfirebasewithangular4 App', () => {
  let page: Loginfirebasewithangular4Page;

  beforeEach(() => {
    page = new Loginfirebasewithangular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
