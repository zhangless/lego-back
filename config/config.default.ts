
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1678630020459_2484';

  // add your egg config in here
  config.middleware = ['mylogger'];

  config.security = {
    csrf: {
      enable: false
    }
  }
  config.view = {
    defaultViewEngine: 'nunjucks'
  }
  config.bodyParser = {
    jsonLimit: '10mb'
  }


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    mylogger: {
      allowedMethod: ['POST']
    }
  };

  // the return config will combines to EggAppConfig
  return {
    ...config as {},
    ...bizConfig,
  };
};
