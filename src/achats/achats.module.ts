import { Module } from '@nestjs/common';
import { AchatsService } from './achats.service';
import { AchatsController } from './achats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achat } from './achat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Achat]),
  ],
  providers: [AchatsService],
  controllers: [AchatsController]
})
export class AchatsModule {}
