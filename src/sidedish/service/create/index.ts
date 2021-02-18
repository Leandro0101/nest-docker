import { Injectable } from '@nestjs/common';
import { ISideDish } from 'src/shared/protocols/sidedish';
import { CreateSideDishRepository } from '../../repositories/create';

@Injectable()
export class CreateSideDishService {
  constructor(
    private readonly createSideDishRepository: CreateSideDishRepository,
  ) {}

  async create(sidedish: ISideDish): Promise<ISideDish> {
    const createdSideDish = await this.createSideDishRepository.exec(sidedish);

    return createdSideDish;
  }
}
