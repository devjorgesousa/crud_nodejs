const Usuario = require('../models/Usuario');

const bcrypt = require('bcryptjs');

module.exports = class AuthController {
    
    static Login(req, res) {
        res.render('auth/login');
    }

    static async LoginPost(req, res) {
        const {email, senha} = req.body;

        if(!email) {
            req.flash('mensagem', 'O e-mail é obrigatório!');
            res.render('auth/login')

            return
        }

        if(!senha) {
            req.flash('mensagem', 'A senha é obrigatória!');
            res.render('auth/login')

            return
        }

        // verificar se o usuario existe
        const usuario = await Usuario.findOne({where: {email: email}})

        if(!usuario) {
            req.flash('mensagem', 'Usuário não encontrado!');
            res.render('auth/login')
            
            return
        }

        // verificar a senha se esta certa
        const senhaMatch = bcrypt.compareSync(senha, usuario.senha)

        if(!senhaMatch) {
            req.flash('mensagem', 'Senha inválida!');
            res.render('auth/login');

            return
        }

        // inicalizar sessão

        req.session.usuarioid = usuario.id
    
        req.flash('mensagem', 'Autenticação realizada com sucesso!');

        req.session.save(() => {
            res.redirect('/crud')
        }) 
    }

    static Cadastrar(req, res) {
        res.render('auth/cadastrar');
    }

    static async CadastrarPost(req, res) {

        const {nome, email, senha, confirmsenha } = req.body

        if(!nome) {
            req.flash('mensagem', 'O nome é obrigatório!');
            res.render('auth/cadastrar')

            return
        }

        if(!email) {
            req.flash('mensagem', 'O e-mail é obrigatório!');
            res.render('auth/cadastrar')

            return
        }

        if(!senha) {
            req.flash('mensagem', 'A senha é obrigatória!');
            res.render('auth/cadastrar')

            return
        }
    
        // validação de senha
        if(senha != confirmsenha) {
            // mensagem
            req.flash('mensagem', 'As senhas não conferem, tente novamente!');
            res.render('auth/cadastrar')
            
            return
        }

        // checar se o usuario já está cadastrado
        const usuarioExiste = await Usuario.findOne({where: {email: email}})

        if (usuarioExiste) {
            req.flash('mensagem', 'O email já está em uso!');
            res.render('auth/cadastrar')
            
            return
        }

        // criar a senha
        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync(senha, salt)

        const usuario = {
            nome,
            email,
            senha: hashedSenha,
        }

        try {
            const criarUsuario = await Usuario.create(usuario)

            // inicializar a sessão
            req.session.usuarioid = criarUsuario.id
    
            req.flash('mensagem', 'Cadastro realizado com sucesso!');

            req.session.save(() => {
                res.redirect('/crud')
            })

        } catch(err) {
            console.log(err)
        }
    }

    static Logout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}

