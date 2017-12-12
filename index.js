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
// app.use((err, req, res, next) => {
//     res.status(424).send({ error: err.message });
// })

app.listen(process.env.PORT || 3013, () => {
    console.log('now listening for requests on port ' + process.env.PORT);
})