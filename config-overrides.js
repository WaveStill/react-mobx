/*
 * @Author: XiJiangtao 
 * @Date: 2018-04-26 14:46:35 
 */


const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  // do stuff with the webpack config...

  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireMobX(config, env);
    config = rewireLess.withLoaderOptions({
       modifyVars: { "@primary-color": "#1DA57A" },
     })(config, env);
  return config;
};