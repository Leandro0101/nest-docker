import { Controller, Delete, Param } from '@nestjs/common';
import { ISideDish } from 'src/shared/protocols/sidedish';
import { DeleteSideDishService } from '../service/delete';

@Controller('sidedishes')
export class DeleteSidedishController {
  constructor(private deleteCreateSideDishService: DeleteSideDishService) {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ISideDish> {
    return await this.deleteCreateSideDishService.delete(id);
  }
}
