import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateManufacturerDto {
  @IsString()
  @ApiProperty()
  manufacturer: string;
  @IsString()
  @ApiProperty()
  location: string;
}
