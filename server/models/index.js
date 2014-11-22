var db = require('../db');




module.exports = {
  users: {
    // Ditto as above.
    get: function () {
      
    },
    post: function () {}
  },

  rooms: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  },

  messages: {
    get: function () {}, // a function which produces all the messages
    // will actually go into the db
    post: function () {} // a function which can be used to insert a message into the database
    // will go into database and create a new table row
  },
};

