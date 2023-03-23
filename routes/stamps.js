const express = require('express');
const router = express.Router();
const db = require('./../db.json')

// RestFul API
router.get('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id) // id references id in parameter
    const stamp = db.stamps.find( s => s.id == id) || {}
    res.json(stamp)
});

router.delete('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id) // id references id in parameter
    const stamp = db.stamps.findIndex( s => s.id == id) || {}
    let deletedStamp = {}
    if (index > -1) {
        deletedStamp = db.stamps.splice(index, 1)[0] 
    }
    res.json(deletedStamp)

});

router.put('/stamps/:id', (req, res, next) => {


});

router.patch('/stamps/:id', (req, res, next) => {


});

router.get('/stamps', (req, res, next) => {


});

module.exports = router

