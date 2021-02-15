import { MainCourse } from 'src/database/models/maincourse';

export interface IFindMainCourseById {
  findById(id: string): Promise<MainCourse>;
}
