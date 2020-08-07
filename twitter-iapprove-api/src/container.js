const { createContainer, asFunction, asValue } = require('awilix');

// Dependency Injections
const app = require('./app');
const logger = require('./infrastructure/logging/logger');
const server = require('./server');
const router = require('./router');
const config = require('./configuration/index');
const database = require('./infrastructure/database');
const repository = require('./infrastructure/repositories');
const response = require('./infrastructure/support/response')
const date = require('./infrastructure/support/date')
const twitterService = require('./infrastructure/proxies/twitter')
const container = createContainer();

container.register({
    app: asFunction(app).singleton(),
    logger: asFunction(logger).singleton(),
    database: asFunction(database).singleton(),
    config: asValue(config),
    router: asFunction(router).singleton(),
    server: asFunction(server).singleton(),
    repository: asFunction(repository).singleton(),
    response: asFunction(response).singleton(),
    date: asFunction(date).singleton(),
    twitterService: asFunction(twitterService).singleton(),
});

module.exports = container;