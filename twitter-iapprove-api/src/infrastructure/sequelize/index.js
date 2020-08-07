const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

module.exports = ({ config, basePath }) => {
    console.log({ ...config.db });;
    const sequelize = new Sequelize(
        config.db.database,
        config.db.user,
        config.db.passwd,
        { 
            dialect: config.db.dialect, 
            storage: config.db.storage,  
            dialectOptions: config.db.dialectOptions 
        }
    )

    const db = {
        sequelize,
        Sequelize,
        models: {}
    }

    const dir = path.join(basePath, './models')
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file)
        // const model = sequelize.import(modelDir)
        const model = require(modelDir)(sequelize, Sequelize.DataTypes)
        db.models[model.name] = model
    })

    Object.keys(db.models).forEach(key => {
        if ('associate' in db.models[key]) {
            db.models[key].associate(db.models)
        }
    })

    return db
}