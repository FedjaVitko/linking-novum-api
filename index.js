const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://superUser:fedor1349@ds123136.mlab.com:23136/novum-testamentum', {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use('/api', require('./routes/api'));
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
// app.use((err, req, res, next) => {
//     res.status(424).send({ error: err.message });
// })

app.listen(process.env.PORT || 3013, () => {
    console.log('now listening for requests on port ' + process.env.PORT);
})