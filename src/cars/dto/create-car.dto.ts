import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  
  @IsString({ message: 'El nombre debe ser string' })
  readonly name: string;

  @IsString()
  //@MinLength(4)
  readonly model: string;
}