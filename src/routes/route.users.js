/**
 * Uso por default de las rutas
 * sin usar el modulo express-promise-roouter
 * 
 * const express = require('express');
 * const router = express.Router();
 */
const router = require('express-promise-router')();

// CONTROLLERS
const { 
    index, 
    newUser,
    getUser,
    deleteUser,
    updateUser,
 } = require('../controllers/ctrl.user');

// RUTAS
router.get('/', index);
router.post('/', newUser);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;