var db = require('../db');

var objectId = 1;

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
}; // allowance for headers- rules of engagement


var sendResponse = function (response, data, status) {
  status = status || 200;
  response.writeHead(status, headers); // for send repsonse, only need response beccuase responding to the client
  response.end(JSON.stringify(data)); // send back the data stringified for client consumption. They will parse it on their end
};

var collectData = function (request, callback) {
  var data = "" // deals exclusively with requests (post)
  request.on('data', function (dataPiece) {
    data+= dataPiece; // pieces together data as it comes in
  });
  request.on('end', function () {
    callback(JSON.parse(data)); // puts through parsed data to callback function that will then add to object and call send response
  })
}

module.exports = {
  users: {
    get: function (request, response) {
      sendResponse(response, {results: messages});
      collectData(request, function (username){ // passes in callback to collectData so that on end of pieceing together data of posted Message, the following actions occur:
      // get username from window
      if (db.getUser === undefined) {
        db.storeUser(sendResponse(response, {couldBAnything: 1}));
      };
      
      ; 
      // get user IDs, get usernames
    },
    post: function (request, response) {
    }
  },

  rooms: {
    get: function (request, response) {
      sendResponse(response, {results: messages}); 
      collectData(request, function (message){ // passes in callback to collectData so that on end of pieceing together data of posted Message, the following actions occur:
      objectId ++;
      var timestamp = Date.now();
      message.objectId = objectId;
      message.createdAt = timestamp;
      // messages.push(message);
      // send to database
      sendResponse(response, {couldBAnything: 1});
      // get roomIDs, get roomnames
    },
    post: function (request, response) {
      // if (newroom)
      //INSERT INTO rooms, add ID Name
      // get room ID NAMe
    }
  },

  messages: {
    get: function (request, response) {
      collectData(request, function (message){ // passes in callback to collectData so that on end of pieceing together data of posted Message, the following actions occur:
      objectId ++;
      var timestamp = Date.now();
      message.objectId = objectId;
      message.createdAt = timestamp;
      // messages.push(message);
      // send to database
      sendResponse(response, {couldBAnything: 1});
      db.query(
        // Get objectID, message, and created at using the IDs obtained from rooms and users request
        )
      // SELECT m.objectID, m.message, m.createdAt
      // FROM Messages m
      // INNER JOIN Rooms r
      // ON m.RoomID = r.RoomID
      // INNER JOIN Users u
      // ON m.UserID = u.USERID
    }, // a function which produces all the messages
   
    post: function (request, response) {
      db.postMessage()
      collectData(request, function (message){ // passes in callback to collectData so that on end of pieceing together data of posted Message, the following actions occur:
      objectId ++;
      var timestamp = Date.now();
      message.objectId = objectId;
      message.createdAt = timestamp;
      // messages.push(message);
      // send to database
      sendResponse(response, {couldBAnything: 1});
    } 
    // create new ID, add obj id , message, created at, and inserd IDs obtained from POST to others
    // a function which can be used to insert a message into the database
  },
};




