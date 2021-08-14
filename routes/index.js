var express = require('express');
const Sequelize  = require('sequelize');
var router = express.Router();
const db = require('../config/database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const tablaLibros = db.define('libro', {
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true, 
    autoIncrement:true,
    allowNull: false
  },
  titulo:{type:Sequelize.STRING},
  autor:{type:Sequelize.STRING},
  estado:{type:Sequelize.STRING}
})

router.post('/', async (req, res) =>{
   const registroLibro ={
    id: 0, 
    titulo: req.body.tituloRegistro,
    autor: req.body.autorRegistro,
    estado: req.body.estado
  } 



  try{
     const cargarLibro = await tablaLibros.create({
      id: registroLibro.id, 
      titulo: registroLibro.titulo, 
      autor: registroLibro.autor,
      estado: registroLibro.estado
    }) 
   
  } catch(error){
    console.log("Error en el alta" + error)
  }
})

module.exports = router;
