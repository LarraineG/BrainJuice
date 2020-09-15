module.exports = function (sequelize, DataTypes) {
    const Humor = sequelize.define("Humor", {
        blurb: {
            type: DataTypes.TEXT
        },
        author: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
        topic: {
            type: DataTypes.STRING
        }
    },{
        timestamps: false,
        createAt: false,
        updatedAt: false
    });

    return Humor;
}