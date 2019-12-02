const express = require('express');

const router = express.Router();

//post to get user
router.get('/', (req, res) => {
	res.status(200).send('hit the user get route');
})

module.exports = router;