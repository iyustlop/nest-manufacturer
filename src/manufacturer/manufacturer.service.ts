import { Injectable } from '@nestjs/common';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ManufacturerService {
  constructor(private prisma: PrismaService) {}

  create(createManufacturerDto: CreateManufacturerDto) {
    return this.prisma.manufacturer.create({ data: createManufacturerDto });
  }

  findAll() {
    return this.prisma.manufacturer.findMany();
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
