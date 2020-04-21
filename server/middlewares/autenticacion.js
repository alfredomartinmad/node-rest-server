const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

//======================
// Verificar token
//======================

let verificaToken = (req, res, next) => {



    let token = req.get('token');


    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario;
        next();
    })



};

//======================
// Verificar USUARIO
//======================

let verificaUsuario = (req, res, next) => {




    let id_usuario = req.usuario._id;

    Usuario.findById(id_usuario, (err, usuario) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        if (usuario.role === 'ADMIN_ROLE') {
            next();
        } else {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Usuario sin permisos'
                }
            })
        }




    })










};


module.exports = {
    verificaToken,
    verificaUsuario
}