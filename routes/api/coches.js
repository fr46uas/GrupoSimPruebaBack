var express = require('express');
var router = express.Router();

const Coches = require('../../models/coches');

router.get('/', async (req, res) => {
    const rows = await Coches.getAll();
    res.json(rows);
});

module.exports = router;