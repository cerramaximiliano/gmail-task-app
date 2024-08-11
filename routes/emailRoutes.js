const express = require('express');
const { fetchEmails } = require('../controllers/emailController');

const router = express.Router();

router.get('/emails', fetchEmails);


module.exports = router;
