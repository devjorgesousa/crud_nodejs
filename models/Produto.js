const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Usuario = require('./Usuario');

const Produto = db.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    preco: {
        type: DataTypes.INTEGER,
        require: true
    },
    produtoImagem: {
        type: DataTypes.STRING,
        require: true
    },
})

Produto.belongsTo(Usuario);
Usuario.hasMany(Produto);

module.exports = Produto