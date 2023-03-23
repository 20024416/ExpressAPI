const express = require('express');
const router = express.Router();
const db = require('./../db.json')

// RestFul API
router.get('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const stamp = db.stamps.find(s => s.id === id);
    if (stamp) {
        res.status(200).json(stamp);
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
    res.status(200).json(deletedStamp)
});

router.put('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id) // id references id in parameter
    const stamp = req.body
    const stampIndex = db.stamps.findIndex(s => s.id == id)
    if (stampIndex > -1) {
        db.stamps.splice(stampIndex, 1)
    }
    stamp.id = id
    db.stamps.push(stamp)
    res.status(200).json(stamp)

});


router.patch('/stamps/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const stamp = db.stamps.find(s => s.id === id);
    if (!stamp) {
        const error = new Error('Stamp not found');
        error.status = 404;
        return next(error);
    }
    stamp.name = req.body.name || stamp.name;
    stamp.value = req.body.value || stamp.value;
    stamp.color = req.body.color || stamp.color;
    res.status(200).json(stamp);
});


router.post('/stamps', (req, res, next) => {
    const { name, value, color } = req.body;
    const newStamp = { id: db.stamps.length + 1, name, value, color };
    db.stamps.push(newStamp);
    res.status(201).json(newStamp);
});

router.get('/stamps', (req, res, next) => {
    res.status(200).json(db.stamps);

});

module.exports = router

