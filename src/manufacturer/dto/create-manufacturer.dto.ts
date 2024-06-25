import { IsNumber, IsString } from 'class-validator';

export class CreateManufacturerDto {
  @IsString()
  manufacturer: string;
  @IsString()
  location: string;
}
