module.exports = (sequelize, type) => {
    return sequelize.define('dvd', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
        score: type.INTEGER,
        actor: type.STRING
    })
}