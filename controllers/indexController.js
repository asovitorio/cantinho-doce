 const connection = require('../database/connection')
 const indexController = {
     index: (req, res) => {
         const teste = { nome: "Dona Antonia", teste: "Cantinho Doce" }
         return res.render('index', { sitema: teste })
     },
     home: async(req, res) => {
         try {
             const produtos = await connection('produtos').select('*')
             const [data] = produtos

             return res.render('home', { produtos: produtos })

         } catch (error) {

         }


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