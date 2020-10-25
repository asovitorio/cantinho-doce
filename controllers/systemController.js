const Knex = require('knex')
const connection = require('../database/connection')
const systemController = {

    index: async (req,res) =>{
        const produtos = await connection('produtos').orderBy('categoria','asc')
        res.render('system',{produtos})
    },
    create: async (req,res) =>{
        console.log(req.files.filename)
        const image = req.files[0].filename
        const {descricao,valor,categoria} = req.body
        const produto = {
            descricao,
            categoria,
            image,
            valor,
        }
       const id = await connection('produtos').returning('id').insert(produto)

            res.redirect('/system')
    },
    update: (req,res) =>{

    },
    delete: (req,res) =>{

    },
}

module.exports = systemController