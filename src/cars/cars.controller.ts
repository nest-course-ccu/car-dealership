import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
//  @UsePipes(ValidationPipe) // a nivel de contorller
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCargs(): any[] {
    return this.carsService.findAll();
  }

  @Get('/:carId') // no es necesario el primer '/'
  // los parametros son string pro defecto incluso si se les pone otro tipo
  // ParseUUIDPipe si se pasa sin inicializar Nest usa la misma instancia
  getCarById(@Param('carId', new ParseUUIDPipe({ version: '4' })) id: string) {
    // +id si id no es un numero +id será NaN, el cual es considerado un numero
    return this.carsService.findOneById(id);
  }

  @Post()
//  @UsePipes(ValidationPipe) // a nivel de endpoint
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':carId')
  updateCar(
    @Param('carId', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto
  ) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':carId')
  deleteCar(@Param('carId', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
