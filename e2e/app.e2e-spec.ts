import { PhotogalleryPage } from './app.po';

describe('photogallery App', () => {
  let page: PhotogalleryPage;

  beforeEach(() => {
    page = new PhotogalleryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
