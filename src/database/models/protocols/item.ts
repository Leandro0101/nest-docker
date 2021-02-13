import { MainCourse } from '../entities/maincourse';
import { SideDish } from '../entities/sidedish';

export type Item = {
  maincourse: MainCourse;
  sidedish: SideDish[];
};
