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

router.get('/:dvdId', async (req, res) => {
    const viewDvd = await Dvd.findAll( req.body, { 
        where: { id: req.params.dvdId} });
    res.json(viewDvd);
});

/* router.get('/:id', async (req, res) => {
    const viewDvd = await Dvd.find( { id: req.params.id} );
    res.json(viewDvd);
}); */

router.put('/:dvdId', async (req, res) => {
    await Dvd.update(req.body, {
        where: { id: req.params.dvdId }
    });
    res.json({ success: 'DVD modificado correctamente' });
});

module.exports = router;