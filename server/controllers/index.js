var models = require('../models');
var _ = require("underscore")
var bluebird = require('bluebird'); // promises library
var handler = require('../request-handler.js')


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
    get: function (req, res) {
      models.rooms.get(req, res);
    }, 
    post: function (req, res) {
      models.rooms.post(req, res);
    } 
  },


  messages: {
    get: function (req, res) {
      models.messages.get(req, res)

      // _.each(
      // models.messages.get(req, res);
      // get roomName ID and roomname, pass on argument to 
      //GET userID and username, pass on argument to
      // GET message object id and using room ids and userids
    }, 
    post: function (req, res) {
      models.messages.get(req, res);
      // models.messages.post(req, res);
      // get 
    } 
  },

};

