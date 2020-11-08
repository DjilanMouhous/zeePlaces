module.exports = (sequelize, Sequelize) => {
    const FixturePlace = sequelize.define("fixturePlace", {});
    return FixturePlace;
};