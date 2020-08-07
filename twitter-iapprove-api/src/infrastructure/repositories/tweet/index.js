const { toEntity } = require('./transform')

module.exports = ({ model, twitterService }) => {
    const getAll = (...args) =>
        model.findAll(...args).then((entity) =>
            entity.map((data) => {
                const { dataValues } = data
                return toEntity(dataValues)
            })
        )

    const getAllFromHash = (...args) => {
        return twitterService.getFromHash(...args);
    }

    const create = (...args) =>
        model.create(...args).then(({ dataValues }) => toEntity(dataValues))

    const update = (...args) =>
        model.update(...args)

    const destroy = (...args) =>
        model.destroy(...args)

    return {
        getAll,
        getAllFromHash,
        create,
        update,
        destroy
    }
}