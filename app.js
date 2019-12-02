const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const user = require('./routes/user');
const work = require('./routes/work');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/work', work);
app.use('/user', user);

app.listen(port, () => {
	console.warn('yeet running on port ', port);
})

app.use((req, res, next) => {
	res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})