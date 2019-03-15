var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');

/* GET users listing. */
router.get('/', (req, res) => {
  Chat.find().then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
});

router.post('/', (req, res) => {
  Chat.insertMany({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
})

router.delete('/:id', (req, res) => {
  Chat.deleteOne({ id: req.params.id })
    .then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
})

module.exports = router;
