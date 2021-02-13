import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SideDishe } from 'src/database/models/sidedishe';

@Injectable()
export class SideDisheService {
  constructor(@InjectModel('SideDishe') private sideDisheModel: SideDishe) {}
}
