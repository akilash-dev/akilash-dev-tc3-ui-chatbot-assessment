import { fetchStockData } from '../utils/fetchData';

export function getStockPrice(stockCode: string) {
    const data = fetchStockData();
    for (const exchange of data) {
        const stock = exchange.topStocks.find((s: any) => s.code === stockCode);
        if (stock) return { stockName: stock.stockName, price: stock.price };
    }
    throw new Error("Stock not found");
}