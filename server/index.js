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
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        'SELECT * FROM users WHERE username = ?',
        username,
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
            }
        }
  );
});


//CRUD

//Insertion
app.post('/create', (req, res) => {
    const player_id = req.body.player_id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;

    db.query('INSERT INTO players (player_id, name, age, country, position) \
        VALUES (?,?,?,?,?)', [player_id, name, age, country, position], 
        (err, result) => {
            
        if (err) {
            console.log(err);
        }
        else {
            res.send('Values Inserted');
        }
    });
});

//Insert to Player_Stats
app.post('/createstats', (req, res) => {
    const player_id = req.body.player_id;
    const appearances = req.body.appearances;
    const goals = req.body.goals;
    const assists = req.body.assists;
    const red_cards = req.body.red_cards;

    db.query('INSERT INTO player_stats \
    (player_id, appearances, goals, assists, red_cards) \
    VALUES (?,?,?,?,?)', [player_id, appearances, goals, assists, red_cards], 
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

// Display all players stats
app.get('/playerstats', (req, res) => {
    db.query(
        'SELECT player_stats.player_id as player_id, \
        name, appearances, goals, assists, red_cards\
        FROM player_stats JOIN players on players.player_id=player_stats.player_id', 
        (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//Update
app.put('/update', (req, res) => {
    const id=req.body.player_id;
    const name=req.body.name;
    const age=req.body.age;
    const country=req.body.country;
    const position=req.body.position;
    db.query("UPDATE players SET name= ?, age = ?, country = ?, position = ? WHERE player_id = ?",
        [name, age, country, position,id],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put('/updatestats', (req, res) => {
    const id=req.body.player_id;
    const appearances=req.body.appearances;
    const goals=req.body.goals;
    const assists=req.body.assists;
    const red_cards=req.body.red_cards;
    db.query("UPDATE player_stats SET \
        appearances= ?, goals = ?, assists = ?, red_cards = ? WHERE player_id = ?",
        [appearances, goals, assists, red_cards,id],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

//Clear Logs
app.delete('/clearlogs', (req, res) => {
    //const id = req.params.id;
    db.query("DELETE FROM logs", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log('success');
        }
    });
});

// Delete PLayers
app.delete('/delete/:id', (req, res) => {
    //const id = req.params.id;
    db.query("DELETE FROM players WHERE player_id = ?", req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log('success');
        }
    });
});


//Delete Player Stats
app.delete('/deletestats/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM player_stats WHERE player_id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(id);
        }
    });
});


app.listen(3001, () => {
    console.log('Server running...');
});

//Logs
app.get('/logs', (req, res) => {
    
    db.query('SELECT * FROM logs', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


//Search by ID
app.get('/searchid/', (req, res) => {
    const {search} = req.query;
    db.query(`select * from player_stats`,search, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result[0]);
            console.log(result[0]);
        }
    });
});
//Procedures
//SearchbyName
app.get('/searchname/', (req, res) => {
    const {search} = req.query;
    db.query(`call searchName(?)`,search, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result[0]);
            console.log(result[0]);
        }
    });
});

//SearchbyPosition
app.get('/searchposition/', (req, res) => {
    const {search} = req.query;
    db.query(`call searchPosition(?)`,search, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result[0]);
            console.log(result[0]);
        }
    });
});