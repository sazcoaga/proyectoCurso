
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
    res.render('autores.hbs', {titulo: 'Buscar por autor'});
})
router.post('/', async (req, res) =>{
    
    console.log(req.body.autor)
    const libro = await librosDisponibles.findAll({
        where:{
           autor: `${req.body.autor}`
        } 
    })

   
    if(libro.length == 0){
        res.render('sinResultados.hbs', {title: "autores"});
    }
    else{
        res.render('resultadosAutor.hbs', {libro, elAutor: req.body.autor})}
})


module.exports = router;