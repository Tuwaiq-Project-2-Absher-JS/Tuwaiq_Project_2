const express = require("express");
const { users } = require("../db");

export function getPersone(req,res) {
  res.send(users);
}

