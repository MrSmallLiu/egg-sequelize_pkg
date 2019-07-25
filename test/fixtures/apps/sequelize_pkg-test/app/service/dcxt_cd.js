'use strict';

const Service = require('egg').Service;

class DcxtCdService extends Service {
  async index() {
    const { ctx, logger } = this;
    const result = {};
    const datas = await ctx.model.DcxtCdb.findAndCountAll().catch(err => {
      result.code = 0;
      result.msg = '查询失败！';
      result.data = err;
      logger.error(new Error(err));
    });
    result.data = datas;
    return result;
  }
}

module.exports = DcxtCdService;
