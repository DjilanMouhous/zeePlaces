module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("color", {
        label: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        hexa: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return Color;
};