module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("categorie", {
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
        }
    });
    return Categorie;
};