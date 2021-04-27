const Sequelize = require('sequelize');

const dvdModel = require('./models/dvd');

const sequielize = new Sequelize('5GF4HSSXRE', '5GF4HSSXRE', 'Eo2LjCn9J4', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

const Dvd = dvdModel(sequielize, Sequelize);

sequielize.sync({ force: false})
.then(()=>{
    console.log('Tablas correctamente sincronizadas');
})

module.exports = {
    Dvd
}