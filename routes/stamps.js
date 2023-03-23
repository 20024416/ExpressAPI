const express = require('express');
const router = express.Router();
const db = require('./../db.json')

// RestFul API
router.get('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const stamp = db.stamps.find(s => s.id === id);
    if (stamp) {
      res.json(stamp);
    } else {
      res.status(404).send(`Stamp with ID ${id} does not exist in Nick's Stamp collection.. Yet.. Gotta catch 'em all!`);
    }
  });

router.delete('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id) // id references id in parameter
    const stampIndex = db.stamps.findIndex(s => s.id == id) || {}
    let deletedStamp = {}
    if (stampIndex > -1) {
        deletedStamp = db.stamps.splice(stampIndex, 1)[0] 
    }
    res.json(deletedStamp)
});

router.put('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id) // id references id in parameter
    const stamp = req.body
    const stampIndex = db.stamps.findIndex( s => s.id == id)
    if(stampIndex > -1) {
        db.stamps.splice(stampIndex, 1)
    }
    stamp.id = id
    db.stamps.push(stamp)
    res.json(stamp)

});

router.patch('/stamps/:id', (req, res, next) => {


});

router.get('/stamps', (req, res, next) => {
    res.json(db.stamps);

});

module.exports = router

