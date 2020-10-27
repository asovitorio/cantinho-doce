const Knex = require('knex')
const connection = require('../database/connection')
const systemController = {

    index: async(req, res) => {
        try {
            const produtos = await connection('produtos').orderBy([{ column: 'categoria' }, { column: 'descricao', order: 'asc' }])
            console.log(req.session.user)
            return res.render('system', { produtos, usuario: req.session.user })
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    create: async(req, res) => {
        // console.log(req.files.filename)
        const { descricao, valor, categoria } = req.body
        const image = categoria + '.png'
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
    update: async(req, res) => {
        const {
            id,
            descricao,
            categoria,
            valor
        } = req.body

        const image = categoria + '.png'
        const produto = {
            descricao,
            categoria,
            image,
            valor
        }

        try {
            await connection('produtos').where('id', id).update(produto)
            res.redirect('/system')
        } catch (error) {
            return res.status(400).json(error)
        }

    },
    delete: async(req, res) => {
        const { id } = req.body
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