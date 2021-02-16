import { Injectable } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { FindSideDishByIdRepository } from '../repositories/findById';

@Injectable()
export class FindSideDishByIdService {
  constructor(
    private readonly findSideDishByIdRepository: FindSideDishByIdRepository,
  ) {}

  async findById(id: string): Promise<SideDish> {
    return await this.findSideDishByIdRepository.exec(id);
  }
}
