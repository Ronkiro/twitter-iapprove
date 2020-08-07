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
        // TODO: DRY
        const getAll = (...args) => model.findAll(...args).then((entity) =>
            entity.map((data) => {
                const { dataValues } = data
                return toEntity(dataValues)
            }))
        return twitterService.getFromHash(...args)
                    .then(async r => {
                        const all = await getAll({attributes: [
                            'tweetId'
                        ]});
                        r['statuses'] = r['statuses'].filter(e => !all.some(obj => obj.tweetId == e.id));
                        return r;
                    });
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