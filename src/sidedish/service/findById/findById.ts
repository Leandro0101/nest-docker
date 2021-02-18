import { Injectable } from '@nestjs/common';
import { ISideDish } from '../../../shared/protocols/sidedish';
import { FindSideDishByIdRepository } from '../../repositories/findById';

@Injectable()
export class FindSideDishByIdService {
  constructor(
    private readonly findSideDishByIdRepository: FindSideDishByIdRepository,
  ) {}

  async findById(id: string): Promise<ISideDish> {
    return await this.findSideDishByIdRepository.exec(id);
  }
}
