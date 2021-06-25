const AuthorController = require('../controllers/author.controller');

module.exports=function(app) {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.put('/api/authors/edit/:id', AuthorController.editAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
}
