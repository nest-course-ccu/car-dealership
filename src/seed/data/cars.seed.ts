import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    name: 'Brand 3',
    model:  'Corolla'
  },
  {
    id: uuid(),
    name: 'Brand 2',
    model:  'Model 1'
  }
]