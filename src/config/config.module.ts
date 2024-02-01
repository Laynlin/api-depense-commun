import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { Config } from './config.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Config]),
  ],
  providers: [ConfigService],
  controllers: [ConfigController]
})
export class ConfigModule {}
