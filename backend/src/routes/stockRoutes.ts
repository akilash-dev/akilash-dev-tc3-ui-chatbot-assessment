import express from 'express';
import { getStockExchanges, getStocksByExchange } from '../services/stockExchangeService';
import { getStockPrice } from '../services/stockPriceService';

const router = express.Router();

router.get('/exchanges', (req, res) => {
    res.json(getStockExchanges());
});

router.get('/stocks/:exchangeCode', (req, res) => {
    const stocks = getStocksByExchange(req.params.exchangeCode);
    res.json(stocks);
});

router.get('/stock/:stockCode', (req, res) => {
    const stock = getStockPrice(req.params.stockCode);
    res.json(stock);
});

export default router;
