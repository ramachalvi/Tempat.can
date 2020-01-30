import express from 'express';

const Route = express.Router();

Route.get('/', (req, res) => {
    res.end('ini sisi back-end');
});

export default Route;