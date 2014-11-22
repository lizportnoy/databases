var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'chat'
});



exports.getMessages = function (callback, extraParams) {
  connection.connect()
  var sql = "SELECT * FROM ?? WHERE ?? = ?";
  connection.query(sql, callback);
  connection.end();

});


exports.postMessage = function (callback, extraParams) {
  connection.connect();
  var sql = "SELECTxx"
  connection.query(sql, callback);
  connection.end();
}

exports.storeRoom = function (callback, extraParams) {
  connection.connect();
  if (!getUser(callback)) 
  var sql = "INSERT INTO rooms (roomname) VALUE"
  if ()
  connection.query(sql, callback);
  connection.end();
}

exports.storeUser = function (callback, extraParams) {
  connection.connect();
  var sql = "SELECTxx"
  connection.query(sql, callback);
  connection.end();
}

exports.getRoom = function (callback, extraParams) {
  connection.connect();
  var sql = "SELECTxx"
  connection.query(sql, callback);
  connection.end();
}

exports.getUser = function (callback, extraParams) {
  connection.connect();
  var sql = "SELECTxx"
  connection.query(sql, callback);
  connection.end();
}

//connection.query('INSERT INTO posts SET ?', {title: 'test'}, function(err, result) {
//   if (err) throw err;

//   console.log(result.insertId);
// });



// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

