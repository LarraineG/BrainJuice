const db = require("../models");
// const passport = require("../config/");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/genre/:genre/:topic?", function (req, res) {
        console.log(req.params);
        let genreTable = req.params.genre;
        let findObj = {};
        if (req.params.topic) {
            findObj.where = {
                [topic]: req.params.topic
            }
        }
        db[genreTable].findAll(findObj)
        .then((result) => {
            res.json(result);
        })
        .catch(err=>{
            res.json(err);
        });
    });

    app.post("/api/:genre", function (req, res) {
        genreTable = req.params.genre;

        db[genreTable].create(req.body)
            .then((result) => {
                res.json(result);
            });
    });
};
