import axios from 'axios';
import readline from 'readline';
import { Car, Command, Field, RequestMethod, Direction, RequestParams } from './types/type';

async function handleCommand(input: Command) {
  try {
    const baseUrl = 'http://localhost:3000/car';
    let response;

    if (input[0] === 'get' && input.length === 3) {
      const [, direction, field] = input as [RequestMethod, Direction, Field];
      const requestParams: RequestParams = { direction, field };
      response = await axios.get<Car[]>(baseUrl, { params: requestParams });
      console.log(response.data);
    } else if (input[0] === 'create' && input.length === 5) {
      const [, brand, model, year, price] = input;
      const car: Car = {
        brand: brand.toLowerCase(),
        model: model.toLowerCase(),
        year: parseInt(year),
        price: parseInt(price),
      };
      response = await axios.post<Car>(baseUrl, car);
      console.log(response.data);
    } else if (input[0] === 'delete' && input.length === 2) {
      const [, id] = input;
      const urlForDelete = `${baseUrl}/${id}`;
      response = await axios.delete<Car>(urlForDelete);
      console.log(response.data);
    } else {
      console.error('Unknown request method or request parameters do not match the required ones');
    }
  } catch (error: any) {
    console.log('Error:', error.response?.data?.message || error.message);
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Type your commands ('get asc brand', 'create toyota camry 2023 30000', 'delete id'):");

  for await (const line of rl) {
    const input: Command = line.trim().split(' ') as Command;
    await handleCommand(input);
  }
}

main();