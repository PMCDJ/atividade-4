const Datastore = require("nedb")

let db = {}
db.users = new Datastore("users.db");
db.users.loadDatabase();

module.exports = app => {
    const { application } = require("express");
    const controller = require("../controllers/controller.js");

    var router = require("express").Router()

    router.get("/", controller.findall)

    //Cria um novo utilizador
    router.post("/registar", controller.registar);

    // Rota para login - tem de ser POST para não vir user e pass na URL
    router.post("/login", controller.login);

    // Rota para verificar e ativar o utilizador
    router.get("/auth/confirm/:confirmationCode", controller.verificaUtilizador)

    app.use('/api/headset', router);
};