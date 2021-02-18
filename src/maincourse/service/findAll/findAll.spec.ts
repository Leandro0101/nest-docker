import { Test } from '@nestjs/testing';
import mainCourseDataSource from '../../../shared/datasource/maincourseDatasource';
import { FindAllMainCourseService } from '.';
import { FindAllMainCourseRepository } from '../../repositories/findAll';
import { IMainCourse } from '../../../shared/protocols/maincourse';
describe('FindAllMainCourseService', () => {
  let findAllMainCourseService: FindAllMainCourseService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FindAllMainCourseService,
        {
          provide: FindAllMainCourseRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    findAllMainCourseService = module.get<FindAllMainCourseService>(
      FindAllMainCourseService,
    );
  });

  beforeEach(() => {
    mockRepository.exec.mockReset();
  });

  it('Should return all main course', async () => {
    const mainCourses: IMainCourse[] = mainCourseDataSource.findAll();
    mockRepository.exec.mockReturnValue(mainCourses);
    const returnedMainCourses = await findAllMainCourseService.findAll();
    expect(returnedMainCourses).toHaveLength(mainCourses.length);
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
