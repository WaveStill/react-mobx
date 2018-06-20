/**
 * Created by zhouyong on 17/8/21.
 */

const utils = {};

utils.printLog = function (path, totalTime) {
  /* eslint-disable no-console */
  console.log(`${path}\tX-Response-Time: ${totalTime}ms`);
  /* eslint-enable no-console */
};

module.exports = utils;
