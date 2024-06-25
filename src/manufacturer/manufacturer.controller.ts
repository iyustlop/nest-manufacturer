import { Controller, Get } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {}

    @Get()
    getAllManufacturer() {
        return this.manufacturerService.getManufacturer();
    }
}
