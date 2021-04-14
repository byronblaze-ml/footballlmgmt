const express = require('express');
const db = require('../config/db');
const app = express();



app.get('/login', (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/login', (req, res) => {
    db.query('SELECT * FROM users WHERE username = ?', username, 
    (err, results) => {
        if(err) {
            console.log(err);
        }
        if(results) {
            if(password== results.password){
                res.send('You are logged in!');
            } else {
                res.send('Wrong username/password');
            }
        } else {
            res.send("User doesn't exist");
        }
        res.send(results);
    })
})
