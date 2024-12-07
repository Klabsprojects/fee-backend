const { Container } = require ('typedi');
const LoggerInstance = require ('./logger');

const UserControllerInstance = require ('');

const injectorInstance = async() => {
  try {
    Container.set('logger', LoggerInstance);
    Container.set('UserController', UserControllerInstance);

    return;
  } catch (err) {
    LoggerInstance.error('🔥 Error on dependency injector instance loader: %o', err);
    throw new Error(err);
  }
};

export default injectorInstance;
