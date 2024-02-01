import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Config } from './config.entity';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(Config)
    private configRepository: Repository<Config>,
  ) {}

  findAll(): Promise<Config[]> {
    return this.configRepository.find();
  }

  create(configData: Config): Promise<Config> {
    const config = this.configRepository.create(configData);
    return this.configRepository.save(config);
  }

  update(id: number, updateData: Partial<Config>): Promise<UpdateResult>{
    return this.configRepository.update(id, updateData);
  }
}
