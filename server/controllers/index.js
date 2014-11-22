var models = require('../models');
var bluebird = require('bluebird'); // promises library



module.exports = {
  users: {
    get: function (req, res) {
      models.users.get(req, res);
    }, 
    post: function (req, res) {
      models.users.post(req, res);
    } 
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.post(req, res);
    },
    post: function (req, res) {
      models.rooms.post(req, res);
    }
  },

  messages: {
    get: function (req, res) {
      models.messages.get(req, res);
    }, 
    post: function (req, res) {
      models.messages.post(req, res);
    } 
  },

};

