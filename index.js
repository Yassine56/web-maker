// external module requires

const express = require('express');
const bodyParser = require('body-parser');
const expressEdge = require('express-edge');





const app = express();



// instanciating custome  MVC controllers







// app config and middleware
app.use(express.static('public'));

app.set('views',`${__dirname}/views`);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use(expressEdge);

// custome middleware



app.listen(4000, () => {
  console.log('server running on port 4000 ...');
  console.log('otot');
})

app.get('/', (req, res) =>  {
  console.log('index page');
  res.render('index');
});

app.get('/auth/login', (req, res) => {
  console.log('toto');
  res.render('login');
} )
