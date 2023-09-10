const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

const upload = require('../helpers/upload');
const verificarAuthAdmin = require('../helpers/authAdmin').verificarAuthAdmin
 
router.get('/crud', verificarAuthAdmin, ProdutoController.produto);
router.post('/adicionar', verificarAuthAdmin, upload.single('produtoImagem'), ProdutoController.adicionarProduto);
router.post("/excluir",  verificarAuthAdmin, ProdutoController.excluirProduto);
router.get("/editar/:id", verificarAuthAdmin, ProdutoController.atualizarProduto);
router.post("/editar", verificarAuthAdmin, upload.single('produtoImagem'), ProdutoController.atualizarProdutoPost);

module.exports = router
