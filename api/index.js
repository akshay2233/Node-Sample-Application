const express = require("express");
const home = require("./resources/home");
const empRegister = require("./resources/register-employee");
const listemployee = require("./resources/list-employee");


const restRouter = express.Router();

restRouter.use("/home", home.homePage);
restRouter.use("/registeremployee", empRegister.registerEmployee);
restRouter.use("/listemployee", listemployee.listEmployee);


module.exports = restRouter;
