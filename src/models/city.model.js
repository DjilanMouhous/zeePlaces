module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define("place", {
        label: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return City;
};