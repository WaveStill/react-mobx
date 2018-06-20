/**
 * Created by zhouyong on 17/8/20.
 */
const utils = require('../utils');

// 打印请求路径，处理耗时
module.exports = async (ctx, next) => {
  const start = Date.now();
  await next();
  const time = Date.now() - start;
  utils.printLog(ctx.path, time);
};
