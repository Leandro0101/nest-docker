import { Test } from '@nestjs/testing';
import mainCourseDataSource from '../../../shared/datasource/maincourseDatasource';
import { FindMainCourseByIdService } from '.';
import { FindMainCourseByIdRepository } from '../../repositories/findById';
import { IMainCourse } from '../../../shared/protocols/maincourse';
describe('FindMainCourseByIdService', () => {
  let findMainCourseByIdService: FindMainCourseByIdService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FindMainCourseByIdService,
        {
          provide: FindMainCourseByIdRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    findMainCourseByIdService = module.get<FindMainCourseByIdService>(
      FindMainCourseByIdService,
    );
  });

  beforeEach(() => {
    mockRepository.exec.mockReset();
  });

  it('Should return found main course', async () => {
    const mainCourse: IMainCourse = mainCourseDataSource.findOne(0);
    mockRepository.exec.mockReturnValue(mainCourse);
    const foundMainCourse = await findMainCourseByIdService.findById(
      '602c376933496501c30aa231',
    );
    expect(foundMainCourse).toEqual(mainCourse);
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
