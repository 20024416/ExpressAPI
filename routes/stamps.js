const express = require('express');
const router = express.Router();
const db = require('./../db.json')

// RestFul API
router.get('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id) // id references id in parameter
    const stamp = db.stamps.find( s => s.id == id) || {}
    res.json(stamp)
    
    res.status(responsCode).json(stamp)
});

router.delete('/stamps/:id', (req, res, next) => {


});

router.put('/stamps/:id', (req, res, next) => {


});

router.patch('/stamps/:id', (req, res, next) => {


});

router.get('/stamps', (req, res, next) => {


});

module.exports = router

