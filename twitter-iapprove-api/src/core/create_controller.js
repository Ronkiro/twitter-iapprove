const path = require('path')

module.exports = function createControllerRoutes(controllerUri) {
    const controllerPath = path.resolve(path.join(__dirname, '../application/modules'), controllerUri)
    const Controller = require(controllerPath)

    return Controller()
}