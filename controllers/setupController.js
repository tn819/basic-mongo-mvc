var Todos = require('../models/toDoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res){
        
        //seed database
        var starterTodos = [
            {
                username:'test',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'test',
                todo: 'bike home',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'test',
                todo: 'learn node servers',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });

}