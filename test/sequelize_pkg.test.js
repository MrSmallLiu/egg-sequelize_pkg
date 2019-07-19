'use strict';

const mock = require('egg-mock');

describe('test/sequelize_pkg.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sequelize_pkg-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sequelizePkg')
      .expect(200);
  });
  it('model test', async () => {
    const ctx = app.mockContext();
    await ctx.service.dcxtCd.index();
  });
});
