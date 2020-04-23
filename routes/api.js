const express = require('express');
const router = express.Router();
const News = require('../models/news');
// let sort = -1

/* GET home page. */
router.get('/', (req, res) => {
    const search = req.query.search || '';
    let sort = req.query.sort;
    if (sort == -1) {
    } else if (sort == 1) {
    } else {
        sort = -1;
    }

    const findNews = News
        .find({ title: new RegExp(search.trim(), 'i') })
        .sort({ created: sort })
        .select('_id title description created')
    findNews.exec((err, data) => {
        res.json(data);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    const findNews = News
        .findById(id)
        .select('_id title description created')

    findNews.exec((err, data) => {
        res.json(data);
    });
});


module.exports = router;
