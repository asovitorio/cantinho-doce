const auth = {
        session: (req, res, next) => {
            console.log(req.session.usuarioLogado)
            if (req.session.usuarioLogado) {
                next()
            } else {
                res.render("error")
            }
        }
    }
    // if (req.session.user) {
    //     const { id, usuario } = req.session.user
    //     if (id == 1 && usuario == 'adm') {
    //         return next()
    //     } else {
    //         return res.send({ msg: "Você não tem privilégio de acesso" })
    //     }
    // }
module.exports = auth