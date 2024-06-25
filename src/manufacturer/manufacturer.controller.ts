import { Controller, Get } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {
    manufacturerService: ManufacturerService;

    constructor(manufacturerService: ManufacturerService) {
        this.manufacturerService = manufacturerService;
    }

    @Get()
    getAllManufacturer() {
        return this.manufacturerService.getManufacturer();
    }
}
