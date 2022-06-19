const express = require('express');

const app = express();


let SERVER_PORT = 1337;

app.use(express.static(__dirname + '/public'));

const server = app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env)
    console.log('Server On', __dirname)
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname + '/Unity/Build'));
app.use(express.static(__dirname + '/Unity'));
app.get('/', (req, res) => {    
    console.log('GET /');
    res.sendFile(__dirname + '/Unity/index.html');
});