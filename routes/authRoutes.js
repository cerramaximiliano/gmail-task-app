const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/auth/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', null, {
      params: {
        code: code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: `http://localhost:${process.env.PORT}/auth/callback`,
        grant_type: 'authorization_code',
      },
    });

    const { access_token, refresh_token } = response.data;
    // Puedes guardar los tokens en la base de datos o usarlos según lo necesites

    res.send('Authorization successful! Tokens received.');
  } catch (error) {
    res.status(500).send('Error retrieving access token.');
  }
});

module.exports = router;
