const indexController = {
    index: (req, res) => {
        const teste = { nome: "Dona Antonia", teste: "Cantinho Doce" }
        return res.render('index', { sitema: teste })
    },
    home: (req, res) => {
        const teste = { nome: "Dona Antonia", teste: "Cantinho Doce" }
        return res.render('home', { sitema: teste })
    },
    login: (req, res) => {
        const teste = { nome: "Dona Antonia", teste: "Cantinho Doce" }
        return res.render('login', { sitema: teste })
    },
    system: (req, res) => {
        const teste = { nome: "Dona Antonia", teste: "Cantinho Doce" }
        return res.render('system', { sitema: teste })
    },
}


module.exports = indexController