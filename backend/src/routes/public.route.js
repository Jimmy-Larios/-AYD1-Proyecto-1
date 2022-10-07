const { Router } = require('express');
const user = require('../services/users.service');

const router = Router();

router.post('/create', user.createUser);
router.get('/getAll', user.getAllUser);

module.exports = router;