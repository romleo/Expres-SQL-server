const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());


const db = new sqlite3.Database('./db/articles.db', (err) => {
  if (err) {
    console.error(err.message);
  }else{
    console.log('Connected to the articles database.');
  }
});

app.get('/articles', (request, response) => {
  db.all(`SELECT rowid, title, body FROM articles`, [], (err, rows) => {
    if (err) {
      response.status(400).send(err);
    }else{
      response.send(rows);
    }
  });
});

app.delete('/articles', (request, response) => {
  //delete
});

app.post('/articles', (request, response) => {
  if (request.query.rowid){
    // update
  }else if (request.query.title && request.query.body){
    db.serialize(() => db.run(`INSERT INTO articles VALUES(?, ?)`, [request.query.title, request.query.body], function(err) {
      if (err) {
        response.status(400).send({error: 'Unable to save new article'});
      }else {
        response.send({status: 'OK'});
      }
    }));
  }else{
    response.status(400).send({error: 'title and body are required fields'});
  }
});


app.listen(3000, '127.0.0.1', function () {
  console.log("Server started on host: localhost, port: 3000");
});

// UPDATE articles
// SET title = '?',
//     body = '?'
// WHERE
//     rowid = ?;

// DELETE FROM articles WHERE rowid=(?)
