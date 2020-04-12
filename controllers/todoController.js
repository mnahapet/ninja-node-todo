var bodyParser = require('body-parser');

var data = [
  { item: 'get milk' },
  { item: 'walk dog' },
  { item: 'click some coding ass' },
  { item: 'drink coffe' }
];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = app => {
  app.get('/todo', (req, res) => {
    res.render('todo', { todos: data });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    console.log(req.body)
    data.push(req.body);
    console.log(data);
    res.json(data);
  });

  app.delete('/todo/:item', (req, res) => {
    data = data.filter(todo => {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    })
    res.json(data);
  });
};