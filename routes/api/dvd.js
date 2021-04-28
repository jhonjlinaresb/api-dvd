const router = require('express').Router();

const { Dvd } = require('../../db');

router.get('/', async (req, res) => {
    const dvds = await Dvd.findAll();
    res.json(dvds);
});

router.post('/', async (req, res) => {
    const dvd = await Dvd.create(req.body);
    res.json(dvd);
});

router.put('/:dvdId', async (req, res) => {
    await Dvd.update(req.body, {
        where: { id: req.params.dvdId }
    });
    res.json({ success: 'DVD modificado correctamente' });
});

module.exports = router;