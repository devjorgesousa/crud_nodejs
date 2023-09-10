const Produto = require('../models/Produto');
const Usuario = require('../models/Usuario');

module.exports = class ProdutoController {

    static async produto(req, res) {
      const usuarioId = req.session.usuarioid

      const usuarios = await Usuario.findByPk(usuarioId, { 
        attributes: {
          exclude: 'senha'
        }
      })

      const produtosData = await Produto.findAll({
        where: {
          UsuarioId: usuarioId
        }, 
        include: Usuario,
      })

      const produtos = produtosData.map((result) => result.get({plain: true}))  

      res.render('produtos/crud', {produtos: produtos, usuarios: usuarios.dataValues.nome})
    }

    static adicionarProduto(req, res) {
        const usuarioId = req.session.usuarioid

        const produto = {
            nome: req.body.nome,
            preco: req.body.preco,
            produtoImagem: req.file.originalname,
            UsuarioId: usuarioId,
        }

        Produto.create(produto)
        .then(() => {
          req.flash('mensagem', 'Produto adicionado com sucesso!')
          res.redirect('/crud')
        })
        .catch((err) => console.log(err))
    }

    static atualizarProduto(req, res) {
      const id = req.params.id

      Produto.findOne({ where: { id: id }, raw: true })
        .then((produto) => {
          res.render('produtos/crud', { produto })
        })
        .catch((err) => console.log(err))
    }

    static atualizarProdutoPost(req, res) {
      const id = req.body.id
      const usuarioId = req.session.usuarioid

      const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
        produtoImagem: req.file.originalname,
        UsuarioId: usuarioId,
      }
  
      Produto.update(produto, { where: { id: id } })
        .then(() => {
          req.flash('mensagem', 'Produto atualizado com sucesso!')
          res.redirect('/crud')
        })
        .catch((err) => console.log(err))
    }

    static excluirProduto(req, res) {
      const id = req.body.id

      Produto.destroy({ where: { id: id } })
        .then(() => {
          req.flash('mensagem', 'Produto removido com sucesso!')
          res.redirect('/crud')
        })
        .catch((err) => console.log(err))
    }
}

