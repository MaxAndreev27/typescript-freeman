function calculatePrice(quantity: 1 | 2, price: number): number {
  return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

enum Status {
  INFO = 100,
  SUCCESS = 200,
  REDIRECT = 300,
  CLIENT_ERROR = 400,
  SERVER_ERROR = 500,
}

type numVals = 1 | 2 | 3 | 4;

function getRandomValue(): numVals {
  return Math.floor(Math.random() * 4) + 1 as numVals;
}

type cities = 'London' | 'Paris' | 'Chicago';
type cityResponse = `City: ${cities}`;

function getCityString(city: cities): cityResponse {
  return `City: ${city}`;
}

let str = getCityString('London');
console.log(str);