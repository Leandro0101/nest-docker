import { Controller } from '@nestjs/common';
import { SideDisheService } from '../service/sidedishe';

@Controller()
export class SidedisheController {
  constructor(private sideDisheService: SideDisheService) {}
}
