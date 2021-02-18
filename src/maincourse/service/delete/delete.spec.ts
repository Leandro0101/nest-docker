import { Test } from '@nestjs/testing';
import mainCourseDataSource from '../../../shared/datasource/maincourseDatasource';
import { DeleteMainCourseService } from '.';
import { DeleteMainCourseRepository } from '../../repositories/delete';
import { IMainCourse } from '../../../shared/protocols/maincourse';
import { FindMainCourseByIdRepository } from '../../repositories/findById';
describe('DeleteMainCourseService', () => {
  let deleteMainCourseService: DeleteMainCourseService;
  const mockDeleteRepository = {
    exec: jest.fn(),
  };
  const mockFindByIdRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteMainCourseService,
        {
          provide: DeleteMainCourseRepository,
          useValue: mockDeleteRepository,
        },
        {
          provide: FindMainCourseByIdRepository,
          useValue: mockFindByIdRepository,
        },
      ],
    }).compile();

    deleteMainCourseService = module.get<DeleteMainCourseService>(
      DeleteMainCourseService,
    );
  });

  beforeEach(() => {
    mockDeleteRepository.exec.mockReset();
    mockFindByIdRepository.exec.mockReset();
  });

  it('Should return the Deleted main course', async () => {
    const mainCourse: IMainCourse = mainCourseDataSource.findOne(0);
    mockFindByIdRepository.exec.mockReturnValue(mainCourse);
    mockDeleteRepository.exec.mockReturnValue(mainCourse);
    const deletedMainCourse: IMainCourse = await deleteMainCourseService.delete(
      '602c376933496501c30aa231',
    );
    expect(deletedMainCourse).toEqual(mainCourse);
    expect(mockDeleteRepository.exec).toBeCalledTimes(1);
    expect(mockFindByIdRepository.exec).toBeCalledTimes(1);
  });
});
