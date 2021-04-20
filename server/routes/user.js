const express = require('express');
const db = require('../config/db');
const app = express();



/*app.get('/login', (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
*/
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ?', username, 
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length > 0) {
        if (password == results[0].password) {
          res.json({ loggedIn: true, username: username });
        } else {
          res.json({
            loggedIn: false,
            message: "Wrong username/password combo!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "User doesn't exist" });
            res.send("User doesn't exist");
        }
        
    });
});
