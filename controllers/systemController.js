const Knex = require('knex')
const connection = require('../database/connection')
const systemController = {

    index: async(req, res) => {
        try {
            const produtos = await connection('produtos').orderBy('categoria', 'asc')
            return res.render('system', { produtos })
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    create: async(req, res) => {
        // console.log(req.files.filename)
        const image = req.files[0] != undefined ? req.files[0].filename : 'image_padrao.jpg'
        const { descricao, valor, categoria } = req.body
        const produto = {
            descricao,
            categoria,
            image,
            valor,
        }
        try {
            const id = await connection('produtos').returning('id').insert(produto)
            res.redirect('/system')
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    update: (req, res) => {

    },
    delete: async(req, res) => {
        const { id } = req.params
        try {
            await connection('produtos').where('id', id).del()
            res.redirect('/system')
        } catch (error) {
            return res.status(400).json(error)
        }
        res.send(req.params)
    },
}

module.exports = systemController