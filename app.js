const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const Server = require('./bin/server');


//Middlesware
app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json());
app.use(express.static('./src/public'));

app.get('/', (req, res) => {
    res.sendFile('./view/home.html', {root: __dirname});
});

//Router
const Routes = require('./src/routes/router');
app.use('/', Routes);

//Server
Server.connectDatabase();


app.listen(process.env.PORT || 3000, () => console.log(`App: http://localhost:3000`));
