const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('crud', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch (err) {
    console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize