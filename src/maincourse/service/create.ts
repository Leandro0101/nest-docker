import { MainCourse } from 'src/database/models/maincourse';

export interface ICreateMainCourse {
  create(mainCourse: MainCourse): Promise<MainCourse>;
}
