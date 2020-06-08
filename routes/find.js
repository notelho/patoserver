const patofinder = require('patofinder');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {

    const absolutePath = patofinder.absolutePath;
    const typeSearch = patofinder.typeSearch;

    try {

        const path = req.query.path;
        const type = req.query.type;

        if (!path || !type) {
            throw new Error('Invalid args');
        }

        if (!absolutePath.test(path)) {
            throw new Error('Invalid path');
        }

        if (!typeSearch.test(type)) {
            throw new Error('Invalid type');
        }

        const result = await patofinder.find(path, type);

        res.json({ result }).status(200).end();

    } catch (error) {

        res.send({ error: error.message }).status(500).end();

    }

});

module.exports = router;
