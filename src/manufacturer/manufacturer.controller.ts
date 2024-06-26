import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import { Response, Request } from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('manufacturer')
@ApiTags('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new manufacturers' })
  @ApiResponse({ status: 200, description: 'Create a new manufacturers' })
  @ApiResponse({ status: 401, description: 'Unathorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiBody({ type: [CreateManufacturerDto] })
  create(@Body() createManufacturerDto: CreateManufacturerDto) {
    console.log(createManufacturerDto);
    return this.manufacturerService.create(createManufacturerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all manufacturers' })
  @ApiResponse({ status: 200, description: 'Return all manufacturers' })
  async findAll(@Req() request: Request, @Res() response: Response) {
    const result = await this.manufacturerService.findAll();
    return response.status(200).json(result);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufacturerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManufacturerDto: UpdateManufacturerDto,
  ) {
    return this.manufacturerService.update(+id, updateManufacturerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manufacturerService.remove(+id);
  }
}
