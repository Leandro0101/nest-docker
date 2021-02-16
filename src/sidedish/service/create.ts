import { Injectable } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { CreateSideDishRepository } from '../repositories/create';

@Injectable()
export class SideDishService {
  constructor(
    private readonly createSideDishRepository: CreateSideDishRepository,
  ) {}

  async create(sidedish: SideDish): Promise<SideDish> {
    const createdSideDish: SideDish = await this.createSideDishRepository.exec(
      sidedish,
    );

    return await createdSideDish.save();
  }
}
