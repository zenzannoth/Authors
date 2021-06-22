const { response } = require('express');
const Author  = require('../models/author.model');

module.exports.index=(req, res)=>{
    res.json({
        message: "Server is up!"
    });
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
    .then(author => res.json(author))
    .catch(err => res.jason(err));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(author => res.json(author))
        .catch(err => res.json(err));
}