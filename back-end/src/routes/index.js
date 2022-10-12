const { response } = require('express')
const express = require('express')
const router = express.Router()
const pool = require('../views/database')
router.get('/', (req, res) => {
    res.send('Hello world')
})



router.post('/autenticar', (req, res) => {
    const sql = `select username from user where password  = ? and username = ?`
    pool.query(sql, [req.body.password, req.body.username], (err, rows, fields) => {
        if (err) throw err;
        else {
            if (Object.entries(rows).length === 0) return res.json({ Status: "Invalid" })
            res.json({Status: "Ok"})
        }
    })
})


module.exports = router;