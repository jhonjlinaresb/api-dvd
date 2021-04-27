const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('¡Server Funciona Correctamente!');
});

module.exports = router;