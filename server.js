const express = require('express');
const bodyParser = require('body-parser');

const oracledb = require('oracledb');
const dbConfig = require('./src/dbconfig.js');

const app = express();
const port = process.env.PORT || 5000;

const queryHR = `SELECT * FROM KOOBP.OS_HR_LOCATIONS`;
const queryAuthors = `SELECT AUTHOR, COUNT(*) AS AUTHORED_BOOKS
          FROM JS2Q4.BOOK_AUTHOR
          GROUP BY AUTHOR
          ORDER BY AUTHOR ASC`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', async (req, res) => {
  // This is where we build queries based on what's put in the GUI. 
  Object.entries(req.body).map( ([key, value]) => {
    if (value) {
      if(key == 'isbn'){
        req.body[key] = "= '" +value + "'";
      }
      else {
        req.body[key] = "= '" +value.toUpperCase() + "'";
      }
    }
    else { 
      req.body[key] = 'IS NULL';
    }});
  console.log(req.body);
  var query ="SELECT JS2Q4.BOOK.ISBN,\n" +
		"JS2Q4.BOOK.TITLE,\n" +
		"JS2Q4.BOOK.EDITION,\n" +
		"JS2Q4.BOOK.GENRE,\n" +
		"JS2Q4.BOOK.PAGES,\n" +
    "JS2Q4.BOOK.PUBLISHER,\n" +
		"JS2Q4.BOOK.PUBLISHYEAR,\n" +
		"COPY_TABLE.JACKET,\n" +
		"COPY_TABLE.GRADE,\n" +
		"COPY_TABLE.BINDING,\n" +
		"COPY_TABLE.NOTES\n" +
  "FROM JS2Q4.BOOK JOIN (SELECT * FROM JS2Q4.COPY INNER JOIN JS2Q4.BOOK_HAS_COPY ON JS2Q4.COPY.COPYID = JS2Q4.BOOK_HAS_COPY.COPYID) COPY_TABLE\n" +
  "ON JS2Q4.BOOK.ISBN = COPY_TABLE.ISBN\n" +
    "WHERE JS2Q4.BOOK.ISBN " + req.body.isbn  + " OR JS2Q4.BOOK.TITLE " + req.body.title +" OR JS2Q4.BOOK.PUBLISHER " + req.body.publisher + " OR JS2Q4.BOOK.PUBLISHYEAR " + req.body.publishYear + " OR JS2Q4.BOOK.GENRE " + req.body.genre + " OR JS2Q4.BOOK.PAGES " + req.body.numPages + " OR JS2Q4.BOOK.EDITION " + req.body.edition + " OR COPY_TABLE.JACKET " + req.body.jacket + " OR COPY_TABLE.GRADE " + req.body.grade + " OR COPY_TABLE.BINDING " + req.body.binding + " OR COPY_TABLE.NOTES " + req.body.notes;
  //var query = "SELECT * FROM JS2Q4.BOOK WHERE ISBN " + req.body.isbn  +  " OR TITLE " + req.body.title + " OR PUBLISHER " + req.body.publisher + " OR PUBLISHYEAR " + req.body.publishYear + " OR GENRE " + req.body.genre + " OR PAGES " + req.body.numPages + " OR EDITION " + req.body.edition;
  console.log(query);
  results = await queryDatabase(query);
  //console.log(results);
  res.send(results);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

async function queryDatabase(query) {
  // Connect to the database.
  let connection = await oracledb.getConnection(dbConfig);
  // Execute the query.
  let result = await connection.execute(query);
  // Release the connection to the database.
  await connection.release();
  return result;
}