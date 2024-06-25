import { IsNumber, IsString } from "class-validator";

export class CreateManufacturerDto {
    @IsNumber()
    id: number;
    @IsString()
    manufacturer: string;
    @IsString()
    location: string;
}
