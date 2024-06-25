import { Injectable } from '@nestjs/common';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@Injectable()
export class ManufacturerService {
  private manufacturers = [
    {
      id: 1,
      manufacturer: 'Ferrari',
      location: 'Modena',
    },
    {
      id: 2,
      manufacturer: 'Porsche',
      location: 'Stuttgart',
    },
    {
      id: 3,
      manufacturer: 'Maserati',
      location: 'Modena',
    },
  ];

  create(createManufacturerDto: CreateManufacturerDto) {
    this.manufacturers.push({
      id: this.manufacturers.length + 1,
      ...createManufacturerDto,
    });
    return createManufacturerDto;
  }

  findAll() {
    return this.manufacturers;
  }

  findOne(id: number) {
    return `This action returns a #${id} manufacturer`;
  }

  update(id: number, updateManufacturerDto: UpdateManufacturerDto) {
    return `This action updates a #${id} manufacturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} manufacturer`;
  }
}
