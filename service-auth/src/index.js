const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample in-memory product store
const products = [];

// Add Product Route
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    const product = { id: products.length + 1, name, price };
    products.push(product);
    res.status(201).json(product);
});

// Get Products Route
app.get('/products', (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});
