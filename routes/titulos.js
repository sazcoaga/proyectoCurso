
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

router.get('/', async(req, res) =>{
    res.render('titulos.hbs', {titulo: 'Buscar'});
})
router.post('/', async (req, res) =>{
    
    console.log(req.body.titulo)
    const libro = await librosDisponibles.findOne({
        where:{
            titulo: `${req.body.titulo}`
        } 
    })

    console.log(libro);
    if(libro == null){
        res.render('sinResultados.hbs', {title: "titulos"});
    }
    else{
        res.render('libroBuscado.hbs', {libro})}
})

/* const express = require('express')
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
      const traerLibros = await librosDisponibles.findAll({
          where:{
              estado: "R"
          }
      })
      //console.log(traerProd)
      res.render('pendientes.hbs',{title:'Libros disponibles', libros:traerLibros})
})



module.exports = router; */
module.exports = router;