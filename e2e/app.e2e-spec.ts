import { UploadimagesPage } from './app.po';

describe('uploadimages App', function() {
  let page: UploadimagesPage;

  beforeEach(() => {
    page = new UploadimagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
