const { response } = require('express')
const express = require('express')
const router = express.Router()
const pool = require('../views/database')
router.get('/', (req,res) => {
    res.send('Hello world')
})



router.post('/autenticar',async (req,res)=>{

    const consulta = await pool.query(`select username from user where password  = '${req.body.password}' and username = '${req.body.username}'`)
    
    try{
    consulta[0].username === req.body.username ? res.json({status : "usuario aceptado"}) : res.json({status : "usuario o contraseña incorrectos"})
    }catch(error){
        res.status(404).json({Status : "usuario o contraseña incorrectos", errors: error})
    }
    })
    

module.exports = router;