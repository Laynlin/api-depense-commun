import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ConfigService } from './config.service';
import { Config } from './config.entity';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  findAll(): Promise<Config[]> {
    return this.configService.findAll();
  }

  @Post()
  create(@Body() configData: Config): Promise<Config> {
    console.log(configData);
    return this.configService.create(configData);
  }

  @Patch(':id')
  async updateConfig(@Param('id') id: number, @Body() updatedData: Partial<Config>){
    return this.configService.update(id, updatedData);
  }
}
