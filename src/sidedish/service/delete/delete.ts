import { Injectable } from '@nestjs/common';
import { FindSideDishByIdRepository } from '../../repositories/findById';
import { DeleteSideDishRepository } from '../../repositories/delete';
import { NotFoundException } from '@nestjs/common';
import { ISideDish } from '../../../shared/protocols/sidedish';

@Injectable()
export class DeleteSideDishService {
  constructor(
    private readonly deleteSideDishRepository: DeleteSideDishRepository,
    private readonly findSideDishByIdRepository: FindSideDishByIdRepository,
  ) {}

  async delete(id: string): Promise<ISideDish> {
    const foundSideDish = await this.findSideDishByIdRepository.exec(id);

    if (!foundSideDish) {
      throw new NotFoundException('Resource not found');
    }

    await this.deleteSideDishRepository.exec(id);

    return foundSideDish;
  }
}
