import { IMainCourse } from '../protocols/maincourse';

class MainCourseDataSource {
  private mainCourses: IMainCourse[] = [
    { name: 'sidedish 1', description: 'any_description', price: 25 },
    { name: 'sidedish 2', description: 'any_description', price: 15 },
    { name: 'sidedish 3', description: 'any_description', price: 25 },
  ];

  findOne(index: number): IMainCourse {
    const mainCourse: IMainCourse = this.mainCourses[index];
    return mainCourse;
  }

  findAll(): IMainCourse[] {
    return this.mainCourses;
  }
}

export default new MainCourseDataSource();
