import { Module } from '@nestjs/common';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ManufacturerModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [],
})
export class AppModule {}
