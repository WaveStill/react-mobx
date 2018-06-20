// 可以根据环境变量读取相应的配置文件， 这样大家都有一份属于各自的配置文件。
const mockConfigFile = process.env.MOCK_CONFIG_FILE_NAME || 'local';
const config = require(`./${mockConfigFile}`);
module.exports = config;
