import { Test } from '@nestjs/testing';
import mainCourseDataSource from '../../../shared/datasource/maincourseDatasource';
import { CreateMainCourseService } from '.';
import { CreateMainCourseRepository } from '../../repositories/create';
import { IMainCourse } from '../../../shared/protocols/maincourse';
describe('CreateMainCourseService', () => {
  let createMainCourseService: CreateMainCourseService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateMainCourseService,

        {
          provide: CreateMainCourseRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    createMainCourseService = module.get<CreateMainCourseService>(
      CreateMainCourseService,
    );
  });

  beforeEach(() => {
    mockRepository.exec.mockReset();
  });

  it('Should return the created side dish', async () => {
    const mainCourse: IMainCourse = mainCourseDataSource.findOne(0);
    mockRepository.exec.mockReturnValue(mainCourse);
    const createdMainCourse: IMainCourse = await createMainCourseService.create(
      mainCourse,
    );

    expect(createdMainCourse).toEqual(mainCourse);
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
