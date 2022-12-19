import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      name: 'Car 1',
      model: 'Toyota',
    },
    { id: uuid(), 
      name: 'Car 2',
      model: 'Honda' 
    },
  ];

  findAll(): any[] {
    return this.cars;
  }

  findOneById(id: string): Car {
    const filtered = this.cars.find(car => car.id === id);
    if(!filtered) {
      throw new NotFoundException(`Car with ID '${id}' not found`)
    }
    return filtered;
  }

  createCar(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: uuid(),
      name: createCarDto.name,
      model: createCarDto.model
    }
    this.cars.push(car);
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto): Car {

    if(updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`CarId is not valid inside body`)
    }

    let carDB = this.findOneById(id);

    this.cars = this.cars.map(car => {
      if(car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id
        }
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  deleteCar(id: string): void {
    this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
