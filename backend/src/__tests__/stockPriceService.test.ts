import { getStockPrice } from '../services/stockPriceService';

// Mock loadStockData function to return test data
jest.mock('../utils/fetchData', () => ({
    fetchStockData: () => require('./test_data.json')
}));

describe('Stock Price Service', () => {
    test('should retrieve stock price for a valid stock code', () => {
        const stock = getStockPrice('CRDA');
        expect(stock).toEqual({ stockName: 'CRODA INTERNATIONAL PLC', price: 4807.00 });
    });

    test('should throw an error for an invalid stock code', () => {
        expect(() => getStockPrice('INVALID')).toThrow('Stock not found');
    });
});