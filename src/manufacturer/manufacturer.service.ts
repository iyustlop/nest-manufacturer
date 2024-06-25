import { Injectable } from '@nestjs/common';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@Injectable()
export class ManufacturerService {
  private manufacturers = [
    {
      "id": 1,
      "manufacturer": "Ferrari",
      "location": "Modena"
    },
    {
      "id": 2,
      "manufacturer": "Porsche",
      "location": "Stuttgart"
    },
    {
      "id": 3,
      "manufacturer": "Maserati",
      "location": "Modena"
    }
  ]

  create(createManufacturerDto: CreateManufacturerDto) {
    return 'This action adds a new manufacturer';
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
