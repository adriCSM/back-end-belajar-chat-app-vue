const express = require('express');
const router = express.Router();
const handler = require('../controller/handler');
const auth = require('../middleware/auth');

router.get('/allPesan', auth, handler.allPesan);
router.get('/allUser', auth, handler.allUser);
router.post('/registrasi', handler.Registrasi);
router.post('/login', handler.Login);
router.post('/chat', auth, handler.Chat);
router.post('/sendPesan', auth, handler.sendPesan);

module.exports = router;
