export type RequestMethod = 'get' | 'create' | 'delete';
export type Direction = 'asc' | 'desc';
export type Field = 'brand' | 'model' | 'year' | 'price';

export type Command = [RequestMethod, Direction, Field] | [RequestMethod, ...string[]];

export interface RequestParams {
  direction: Direction;
  field: Field;
}

export interface Car {
  brand: string;
  model: string;
  year: number;
  price: number;
}