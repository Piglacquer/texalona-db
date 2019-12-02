const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).send('hit the work get route');
})

//get all

//post new

//update one

module.exports = router;