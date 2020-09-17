<<<<<<< HEAD
const db = require('../models');
=======
const db = require("../models");
//added package
const Quote = require('inspirational-quotes');

>>>>>>> bc325ea043b0e3474d4f0e1f55b2b32a8082fdef
// const passport = require("../config/");

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/motivate', (req, res) => {
    db.Motivate.findAll({})
      .then((result) => {
        res.render('motivate', { data: result });
      });
  });

  app.get('/humor', (req, res) => {
    db.Humor.findAll({})
      .then((result) => {
        res.render('humor', { data: result });
      });
  });

  app.get('/surprise', (req, res) => {
    db.Surprise.findAll({})
      .then((result) => {
        res.render('surprise', { data: result });
      });
  });

<<<<<<< HEAD
  app.get('/genre/:genre/:topic?', (req, res) => {
    const genreTable = req.params.genre;
    const findObj = {};
    if (req.params.topic) {
      findObj.where = {
        topic: req.params.topic,
      };
    }
    db[genreTable].findAll(findObj)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post('/api/:genre', (req, res) => {
    const genreTable = req.params.genre;

    db[genreTable].create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
=======
        db[genreTable].create(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((err)=>{
            res.json(err);
        });
    });

    app.get("/api/quotes", function(req, res){
        var quote = Quote.getQuote();
        //console.log(quote);
        res.json(quote);
    })
 

 

>>>>>>> bc325ea043b0e3474d4f0e1f55b2b32a8082fdef
};
