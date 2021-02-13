import { Injectable } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { SideDish } from 'src/database/models/sidedish';

@Injectable()
export class OrderService {
  total(mainCourse: MainCourse, sidedish: SideDish[]): number {
    let total = mainCourse.price;

    for (const s of sidedish) {
      total += s.price;
    }

    return total;
  }
}
