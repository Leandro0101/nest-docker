import { Injectable } from '@nestjs/common';
import { DeleteSideDishRepository } from '../repositories/delete';

@Injectable()
export class SideDishService {
  constructor(
    private readonly deleteSideDishRepository: DeleteSideDishRepository,
  ) {}

  async delete(id: string): Promise<void> {
    await this.deleteSideDishRepository.exec(id);
  }
}
