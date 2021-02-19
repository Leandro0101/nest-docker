import { Test } from '@nestjs/testing';
import maincourseDataSource from '../../../shared/datasource/maincourseDatasource';
import { CreateMainCourseController } from '.';
import { IMainCourse } from '../../../shared/protocols/maincourse';
import { CreateMainCourseService } from '../../service/create';
describe('CreateMaincourseService', () => {
  let createMaincourseController: CreateMainCourseController;
  const mockRepository = {
    create: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateMainCourseController,

        {
          provide: CreateMainCourseService,
          useValue: mockRepository,
        },
      ],
    }).compile();

    createMaincourseController = module.get<CreateMainCourseController>(
      CreateMainCourseController,
    );
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
  });

  it('Should return the created side dish', async () => {
    const maincourse: IMainCourse = maincourseDataSource.findOne(0);
    mockRepository.create.mockReturnValue(maincourse);
    const createdMaincourse: IMainCourse = await createMaincourseController.create(
      maincourse,
    );
    expect(createdMaincourse).toMatchObject(maincourse);
    expect(mockRepository.create).toBeCalledTimes(1);
  });
});
