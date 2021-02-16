import { Injectable } from '@nestjs/common';
import { DeleteSideDishRepository } from '../repositories/delete';

@Injectable()
export class DeleteSideDishService {
  constructor(
    private readonly deleteSideDishRepository: DeleteSideDishRepository,
  ) {}

  async delete(id: string): Promise<void> {
    await this.deleteSideDishRepository.exec(id);
  }
}
