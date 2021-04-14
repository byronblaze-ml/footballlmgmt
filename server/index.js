const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Byron@#12',
    database: 'playerSystem',
});

//UserAuth
app.get('/login', (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


//CRUD

//Insertion
app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;

    db.query('INSERT INTO players (name, age, country, position) VALUES (?,?,?,?)', [name, age, country, position], 
    (err, result) => {
        
    if (err) {
        console.log(err);
    }
    else {
        res.send('Values Inserted');
    }
    });
});

// Display all players
app.get('/players', (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//Update
//app.put('/update', (req, res) => {
//    const id=req.body.id;
 //   db.query("UPDATE SET players ")
//})

// Delete
app.delete('/delete/:id', (req, res) => {
    //const id = req.params.id;
    db.query("DELETE FROM players WHERE id = ?", req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log('success');
        }
    });
});


app.listen(3001, () => {
    console.log('Server running...');
});