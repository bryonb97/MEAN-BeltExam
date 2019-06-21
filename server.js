var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const path = require('path');
const flash = require('express-flash');
app.use(flash());

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(8000, function () {
    console.log('listening at port 8000');
})

//this route will be triggered if any of the routes above did not match
// app.all("*", (req, res, next) => {
//     res.sendFile(path.resolve("./public/dist/public/index.html"))
// });

require('./server/config/mongoose');
require('./server/config/routes')(app);