// const { query } = require("express");
let db = require("../src/db");

const createItem = (req, res) => {
  let item = req.body.item;
  let description = req.body.description;

  let sql = "insert into groceries(item, description)values(?, ?)";
  let params = [item, description];
  db.query(sql, params, function (err, results) {
    if (err) {
      console.log("error with create item function", err);
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
};

const listItems = (req, res) => {
  let sql = "select id, item from groceries;";
  db.query(sql, function (err, results) {
    if (err) {
      console.log("error with listItems function");
    } else {
      res.send(results);
    }
  });
};

const getItem = (req, res) => {
  let id = req.params.id;
  let sql = "select id, item, description from groceries where id = ?";
  let params = [id];
  db.query(sql, params, function (err, results) {
    if (err) {
      console.log("error with the getItem function");
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
};

const updateItem = (req, res) => {
  let item = req.body.item;
  let description = req.body.description;
  let id = req.params.id;
  let params = [item, description, id];
  let sql = "update groceries set item = ?, description = ? where id = ?";
  db.query(sql, params, function (err, results) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
};

const deleteItem = (req, res) => {
  let id = req.params.id;
  let sql = "delete from groceries where id = ?";
  let params = [id];
  db.query(sql, params, function (err, results) {
    if (err) {
      console.log("there was an error with the delete item function");
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
};

module.exports = {
  createItem,
  listItems,
  getItem,
  updateItem,
  deleteItem,
};
