var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Exemplo = require('../models/Exemplo.js');

router.get('/', function(req, res, next) {
  Exemplo.find(function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

router.post('/', function(req, res, next) {
  Exemplo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Exemplo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Exemplo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Exemplo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
