 const Knex = require('knex')
const connection = require('../database/connection')
 const indexController = {
     index: (req, res) => {
        
         return res.render('index')
     },
     home: async(req, res) => {
         try {
             const produtos = await connection('produtos').orderBy('categoria','asc')
             const [data] = produtos
              console.log(produtos)  
             return res.render('home', { produtos: produtos })

         } catch (error) {

         }


     },
     login: async (req, res) => {
         return res.render('login',{erro:undefined})
        },

        system: async(req, res) => {
        const {usuario,senha} = req.body 
          const result = await connection('usuarios').where('usuario',usuario);
            
          if(result == 0 || result == undefined){
              return res.render('login',{erro:"usuario"})
              
          } 
          if(senha == undefined || senha != result[0].senha){
              console.log(result[0].senha)
            return res.render('login',{erro:"senha"})
          }
         
          return  res.redirect('/system')
                
            
        


           
     },
 }


 module.exports = indexController