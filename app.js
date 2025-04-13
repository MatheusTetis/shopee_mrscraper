require('dotenv').config();
const express = require('express');
const app = express();
const ngrok = require('@ngrok/ngrok');
const port = process.env.PORT || 3000;
var getShopeeProductData = require('./getShopeeProductData.js')

// API endpoint to get product details
app.get('/shopee', async (req, res) => {
    const { storeId, dealId } = req.query;

    console.log(storeId)
    console.log(dealId)

    if (!storeId || !dealId) {
        return res.status(400).json({ error: 'storeId and dealId are required' });
    }

    try {
        const productData = await getShopeeProductData.getShopeeProductData(storeId, dealId);
        console.log(storeId, dealId, productData)
        res.json(productData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch product data' });
    }
});

app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Server started on http://localhost:${port}`);
    const url = await ngrok.forward({
        authtoken: process.env.NGROK_TOKEN,
        addr: port,
        hostname: "select-intensely-feline.ngrok-free.app"
    });
    console.log(`🌍 Public URL: ${url}`);
});