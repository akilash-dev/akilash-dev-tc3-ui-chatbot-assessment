import request from 'supertest';
import app from '../app';

// Mock loadStockData function to return test data
jest.mock('../utils/fetchData', () => ({
    fetchStockData: () => require('./test_data.json')
}));

describe('API Routes', () => {
    test('GET /api/exchanges should return all stock exchanges', async () => {
        const response = await request(app).get('/api/exchanges');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { code: 'LSE', stockExchange: 'London Stock Exchange' }
        ]);
    });

    test('GET /api/stocks/:exchangeCode should return stocks for valid exchange code', async () => {
        const response = await request(app).get('/api/stocks/LSE');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { code: 'CRDA', stockName: 'CRODA INTERNATIONAL PLC', price: 4807.00 },
            { code: 'GSK', stockName: 'GSK PLC', price: 1574.80 }
        ]);
    });

    test('GET /api/stocks/:exchangeCode should return 500 for invalid exchange code', async () => {
        const response = await request(app).get('/api/stocks/INVALID');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: 'Exchange not found' });
    });

    test('GET /api/stock/:stockCode should return stock details for valid stock code', async () => {
        const response = await request(app).get('/api/stock/CRDA');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ stockName: 'CRODA INTERNATIONAL PLC', price: 4807.00 });
    });

    test('GET /api/stock/:stockCode should return 500 for invalid stock code', async () => {
        const response = await request(app).get('/api/stock/INVALID');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: 'Stock not found' });
    });
});