module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
        number: {
            type: Sequelize.INTEGER,
        },
        street: {
            type: Sequelize.STRING,
        },
        zipCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return Address;
};