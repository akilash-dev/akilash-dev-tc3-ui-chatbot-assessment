import fs from 'fs';
import path from 'path';

export function fetchStockData() {
    const filePath = path.join(__dirname, '../../stock_data.json');
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error in reading stock data:", error);
        throw new Error("Unable to fetch stock data");
    }
}
