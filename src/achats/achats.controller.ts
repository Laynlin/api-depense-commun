import { Controller, Get, Post, Body } from '@nestjs/common';
import { AchatsService } from './achats.service';
import { Achat } from './achat.entity';

@Controller('achats')
export class AchatsController {
  constructor(private readonly achatsService: AchatsService) {}

  @Get()
  findAll(): Promise<Achat[]> {
    return this.achatsService.findAll();
  }

  @Post()
  create(@Body() achatData: Achat): Promise<Achat> {
    return this.achatsService.create(achatData);
  }
}
