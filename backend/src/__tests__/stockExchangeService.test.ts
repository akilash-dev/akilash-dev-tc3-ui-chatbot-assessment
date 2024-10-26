import { getStockExchanges, getStocksByExchange } from '../services/stockExchangeService';

// Mock loadStockData function to return test data
jest.mock('../utils/fetchData', () => ({
    fetchStockData: () => require('./test_data.json')
}));

describe('Stock Exchange Service', () => {
    test('should retrieve all stock exchanges', () => {
        const exchanges = getStockExchanges();
        expect(exchanges).toEqual([
            { code: 'LSE', stockExchange: 'London Stock Exchange' }
        ]);
    });

    test('should retrieve stocks for a given exchange code', () => {
        const stocks = getStocksByExchange('LSE');
        expect(stocks).toEqual([
            { code: 'CRDA', stockName: 'CRODA INTERNATIONAL PLC', price: 4807.00 },
            { code: 'GSK', stockName: 'GSK PLC', price: 1574.80 }
        ]);
    });

    test('should throw an error for an invalid exchange code', () => {
        expect(() => getStocksByExchange('INVALID')).toThrow('Exchange not found');
    });
});