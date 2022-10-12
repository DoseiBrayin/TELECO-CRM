const { Router } = require('express');
const express = require('express')
const router = express.Router();

const pool = require('../views/database');

//Search user petition's
router.get('/:id',(req,res)=>{
    const {id} = req.params
    let sql = 'select c.full_name, p.* FROM client c INNER JOIN petition p WHERE p.client_idclient=? AND c.idclient=p.client_idclient '

    pool.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            if(Object.entries(rows).length === 0) return res.json({"Messages":"Don't found petition for this client"})
            res.json(rows)
        }
    })
})
//Busca un cliente
router.get('/client/:id',(req,res)=>{
    const {id} = req.params
    let sql = 'select c.client_email,c.direction,c.full_name FROM client c where c.idclient=?'
    pool.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            if(Object.entries(rows).length === 0) return res.json({"Messages":"Client don't exists"})
            res.json(rows)
        }
    })
})
//Actualiza la informacion de cliente
router.put('/client/:id',(req,res)=>{
    const {id} = req.params
    const {email,dir,name} = req.body
    let sql = `update client set client_email = ?,
                direction = ?, full_name = ? where idclient = ?`
    pool.query(sql,[email,dir,name,id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({"messages":"Updating success"})
        }
    })
})

router.post('/client/petition',(req,res)=>{
    const {client_id,email,des} = req.body
    let sql = "INSERT INTO `petition` (`idpettion`, `description`, `state`, `create_time`, `client_idclient`, `plataform`) VALUES ('147', 'Petición de solución de errores', 'en espera', '2022-10-05 13:50:20', '428695342', 'web')"
})

module.exports = router;
