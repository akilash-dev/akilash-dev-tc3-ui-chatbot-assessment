import { fetchStockData } from '../utils/fetchData';

export function getStockExchanges() {
    const data = fetchStockData();
    return data.map((exchange: any) => ({
        code: exchange.code,
        stockExchange: exchange.stockExchange
    }));
}

export function getStocksByExchange(exchangeCode: string) {
    const data = fetchStockData();
    const exchange = data.find((ex: any) => ex.code === exchangeCode);
    if (!exchange) throw new Error("Exchange not found");
    return exchange.topStocks;
}