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
    name: 'Sweater',
    stock: 6,
    description: 'Green Sweater',
    price: 20,
  },
];

let allOrders = [
  {
    date: '16/07/2021',
    productname: 'shorts',
    products: [],
    customer: 'Jonas',
    count: 2,
    id: '',
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
});

app.get('/getOrders', function (request, response) {
  response.send(allOrders);
});

app.post('/addOrder', function (request, response) {
  allOrders.push(request.body);
  response.status(200).send();
});

app.listen(PORT, function () {
  console.log(`Now running on port: ${PORT}`);
});
