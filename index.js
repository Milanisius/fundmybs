#!/usr/bin/env node

var config = require('./config');

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


app.get('/api/projectsQuery', (req, res) => {

    client.query('SELECT projects.id, projects.name, projects.description, projects.video, projects.current, projects.goal, projects.creationtime, users.username, users.picture  FROM projects, users WHERE users.id=projects.owner LIMIT 100;')
    .then(queryRes => {
        console.log(queryRes.rows);
        res.send(queryRes.rows);
    })
    .catch(e => console.error(e.stack))

    });

app.listen(8000);
