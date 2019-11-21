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
  console.log(req.body);
  results = await queryDatabase(queryHR);
  console.log(results);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}. \
    Now I am going to perform a test query, here is what is returned: ${results}`,
  );
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