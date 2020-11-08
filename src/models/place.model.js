module.exports = (sequelize, Sequelize) => {
    const Place = sequelize.define("place", {
        label: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Place;
};