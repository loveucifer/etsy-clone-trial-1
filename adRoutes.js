const express = require('express');
const { ensureAuth } = require('../middleware/auth');
const Ad = require('../models/Ad');
const router = express.Router();

router.post('/', ensureAuth, async (req, res) => {
    try {
        const newAd = new Ad({
            ...req.body,
            user: req.user.id
        });
        const ad = await newAd.save();
        res.status(201).json(ad);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const ads = await Ad.find().populate('user', 'displayName');
        res.status(200).json(ads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;