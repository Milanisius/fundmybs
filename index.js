const express = require('express');
const app = express();

//Database acces
const {Pool, Client} = require('pg');
// Database config
const client = new Client({
    user:config.DB_USER,
    host:config.DB_URL,
    database:config.WEBSDB_NAME,
    password:config.DB_PASSWORD,
    port:config.DB_PORT
    })
client.connect();


app.get('/projectsQuery', (req, res) => {

    client.query('SELECT * FROM projects LIMIT 100;')
    .then(queryRes => {
        console.log(queryRes);
        res.send(queryResult.json);
    })
    .catch(e => console.error(e.stack))

    res.send('FAIL');

    });

app.listen(3000);
