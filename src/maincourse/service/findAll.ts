import { MainCourse } from 'src/database/models/maincourse';

export interface IFindAllMainCourses {
  findAll(): Promise<MainCourse[]>;
}
