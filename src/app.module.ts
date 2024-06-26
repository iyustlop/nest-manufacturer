import { Module } from '@nestjs/common';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ManufacturerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
