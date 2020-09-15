module.exports = function (sequelize, DataTypes) {
    const Surprise = sequelize.define("Surprise", {
        blurb: { // The text
            type: DataTypes.TEXT
        },
        author: { //By who
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
        topic: { //Inspire, Laugh, Listen(Advice)
            type: DataTypes.STRING
        }
    },{
        timestamps: false,
        createAt: false,
        updatedAt: false
    });

    return Surprise;
}