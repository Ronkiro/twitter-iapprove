module.exports = function (sequelize, DataTypes) {
    const Tweet = sequelize.define('tweet', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

        },
        isApproved: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        tweetId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        classMethods: {
            associate() {
                // associations can be defined here
            }
        }
    })

    return Tweet
}