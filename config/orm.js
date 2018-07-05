var connection = require("./connection.js");
var tableName = "burgers";
var orm = {
  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;
    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  insertOne: function(burger, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    connection.query(s, [
      burger.burger_name, burger.devoured
    ], function(err, result) {
      callback(result);
    });
  },

  devourOne: function(burger, condition, callback) {
    var s = "UPDATE " + tableName + " SET devoured=? WHERE " + condition;
    connection.query(s, [
        burger.devoured
    ], function(err, result) {
      callback(result);
    });
  }
};

module.exports = orm;
