const { Router } = require('express');

const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.json({msg: "Test Blogs"})
    })
    .post()

router.route('/:id')
    .get()
    .put()
    .delete()

module.exports = router; 