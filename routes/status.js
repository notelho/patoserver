const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ ok: true }).status(200).end();
});

module.exports = router;
