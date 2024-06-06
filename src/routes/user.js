const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 유저 생성
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 모든 유저 조회
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
