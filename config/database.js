//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> wamp
let database = "heroku_47bd0c2873a50bb"
let userMYSQL = "b0f096e406580f"
let passMySQL = "8c728e05"
let hostMySQL = "eu-cdbr-west-01.cleardb.com"

/* let database = 'biblioteca'
let userMYSQL = 'root'
let passMySQL = ''
let hostMySQL = '127.0.0.1'
 */


const db = new Sequelize(database, userMYSQL, passMySQL, {
  host: hostMySQL,
  dialect: 'mysql',
  define: {
        //desactivamos el timestamp, para que no envie fechas de actualizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
        freezeTableName:true
    }
})

module.exports = db;