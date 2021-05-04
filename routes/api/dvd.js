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
    const viewDvd = await Dvd.findOne(
         {id: req.params.dvdId} );
    res.json(viewDvd);
});

/* router.get('/:dvdId', async (req, res) => {
        try {
            const dvdView = await Dvd.find({
                id: req.params.dvdId 
            })
            res.send({
                dvdView
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'no se pueden mostrar el dvd'
            })
            
        }   
}); */

router.put('/:dvdId', async (req, res) => {
    await Dvd.update(req.body, {
        where: { id: req.params.dvdId }
    });
    res.json({ success: 'DVD modificado correctamente' });
});

router.delete('/:dvdId', async (req, res) => {
    await Dvd.destroy({
        where: { id: req.params.dvdId }
    });
    res.json({ success: 'DVD eliminado correctamente'});
});

module.exports = router;