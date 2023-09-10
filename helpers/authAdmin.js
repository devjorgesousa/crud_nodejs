module.exports.verificarAuthAdmin = function(req, res, next) {

    const usuarioId = req.session.usuarioid    

    if (!usuarioId) {
        res.redirect("/")
    }

    next()     
}