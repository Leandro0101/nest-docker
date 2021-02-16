import { Injectable } from '@nestjs/common';
import { DeleteMainCourseRepository } from 'src/maincourse/repositories/delete';

@Injectable()
export class DeleteMainCourseService {
  constructor(
    private readonly deleteMainCourseRepository: DeleteMainCourseRepository,
  ) {}

  async delete(id: string): Promise<void> {
    await this.deleteMainCourseRepository.exec(id);
  }
}
