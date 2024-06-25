import { Module } from '@nestjs/common';
import { ManufacturerModule } from './manufacturer/manufacturer.module';

@Module({
  imports: [ManufacturerModule],
  providers: [],
})
export class AppModule {}
