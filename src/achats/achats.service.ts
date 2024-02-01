import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achat } from './achat.entity';

@Injectable()
export class AchatsService {
  constructor(
    @InjectRepository(Achat)
    private achatsRepository: Repository<Achat>,
  ) {}

  findAll(): Promise<Achat[]> {
    return this.achatsRepository.find();
  }

  create(achatData: Achat): Promise<Achat> {
    const achat = this.achatsRepository.create(achatData);
    return this.achatsRepository.save(achat);
  }
}
