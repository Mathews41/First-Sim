require('dotenv').config();
const express = require('express')
const cors = require('cors');
const massive = require('massive')
const ctrl = require('./controller')


const{ 
    CONNECTION_STRING
}=process.env

const app = express();

app.use(express.json());
app.use(cors());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db',dbInstance)
    console.log('database be mile high clubbin')
})
//endpoints go under here
app.get('/api/product',ctrl.getProducts)
app.get('/api/product/:id', ctrl.getOne)
app.post('/api/product',ctrl.createProduct)
app.put('/api/product/:id',ctrl.updateProduct)
app.delete('/api/product/:id',ctrl.deleteProduct)

const port = 8080;

app.listen(port, () => {
    console.log('mile high clubbin')
})