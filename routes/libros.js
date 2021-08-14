const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()
//Conexion MYSQL
const db = require('../config/database')
//Model Tabla Productos
const librosDisponibles = db.define('libro', {

    id:{
        type:Sequelize.INTEGER, 
        primaryKey: true, 
        allowNull: false
    },
    titulo:{type:Sequelize.STRING}, 
    autor:{type:Sequelize.STRING}, 
    estado:{type:Sequelize.STRING}
}); 


// arrow function
router.get('/', async (req,res) => {
        //consulta
      const traerLibros = await librosDisponibles.findAll()
      //console.log(traerProd)
      res.render('libros.hbs',{title:'Libros disponibles', libros:traerLibros})
})



module.exports = router;