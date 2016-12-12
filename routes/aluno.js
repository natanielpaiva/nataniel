var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Aluno = require('../models/Aluno.js');

router.get('/', function(req, res, next) {
  Aluno.find(function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

router.post('/', function(req, res, next) {
  Aluno.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Aluno.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Aluno.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Aluno.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
