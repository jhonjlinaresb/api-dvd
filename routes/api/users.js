const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');
const jwt = require('jwt-simple');
const moment = require('moment');

router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').notEmpty(),
    check('email', 'Debe ser un Email, es obligatorio').isEmail()
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json( user);

});

router.post('/login', async (req, res) =>{
    const user = await User.findOne({ where : { email: req.body.email } });
    if (user) {
        const verifyPass = bcrypt.compareSync(req.body.password, user.password);
        if (verifyPass) {
            res.json({ success: 'TOKEN'});
        } else {
            res.json({ error: 'La contraseña es incorrecta'});
        }
    } else {
        res.json({ error: 'Error en email y/o contraseña'});
    }
});

const createToken = (user) => {

}

module.exports = router;