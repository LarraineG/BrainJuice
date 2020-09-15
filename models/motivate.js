module.exports = function (sequelize, DataTypes) {
    const Motivate = sequelize.define("Motivate", {
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

    return Motivate;
}