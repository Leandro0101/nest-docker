import { Injectable } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { FindAllSideDishRepository } from '../../repositories/findAll';

@Injectable()
export class FindAllSideDishService {
  constructor(
    private readonly findAllSideDishRepository: FindAllSideDishRepository,
  ) {}

  async findAll(): Promise<SideDish[]> {
    return await this.findAllSideDishRepository.exec();
  }
}
