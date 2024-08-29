const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample in-memory order store
const orders = [];

// Create Order Route
app.post('/orders', (req, res) => {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
        return res.status(400).json({ message: 'Product ID and quantity are required' });
    }
    const order = { id: orders.length + 1, productId, quantity };
    orders.push(order);
    res.status(201).json(order);
});

// Get Orders Route
app.get('/orders', (req, res) => {
    res.json(orders);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});
