const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});

let allProducts = [
  {
    name: '',
    price: 20,
    description: '',
    stock: 1,
  },
];

let allOrder =  [ {
      date: '16/07/2021',
      productname: 'shorts',
      customer: 'Jonas',
      count: 2
    },
    ];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
  response.send('Hello from server');
});

app.post('/', function (request, response) {
  response.status(200).send({ message: 'Data received' });
});

app.get('/getProducts', (request, response) => {
  response.send(allProducts);
});

app.post('/addProduct', (request, response) => {
  allProducts.push(request.body);
  response.status(200).send({ message: 'Product added' });
  console.log(allProducts);
});

app.get('/allOrder', function (request, response) {
  response.send(allOrder);
});

app.post('/addOrder', function (request, response) {
  allOrder.push(request.body);
  response.status(200).send();
});

app.listen(PORT, function () {
  console.log(`Now running on port: ${PORT}`);
});

