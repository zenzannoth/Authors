const AuthorController = require('../controllers/author.controller');

module.exports=function(app) {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
}
