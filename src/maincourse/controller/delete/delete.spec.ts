import { Test } from '@nestjs/testing';
import maincourseDataSource from '../../../shared/datasource/maincourseDatasource';
import { DeleteMainCourseController } from '.';
import { IMainCourse } from '../../../shared/protocols/maincourse';
import { DeleteMainCourseService } from '../../service/delete';
import { NotFoundException } from '@nestjs/common';
describe('DeleteMaincourseService', () => {
  let deleteMaincourseController: DeleteMainCourseController;
  const mockRepository = {
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteMainCourseController,

        {
          provide: DeleteMainCourseService,
          useValue: mockRepository,
        },
      ],
    }).compile();

    deleteMaincourseController = module.get<DeleteMainCourseController>(
      DeleteMainCourseController,
    );
  });

  beforeEach(() => {
    mockRepository.delete.mockReset();
  });

  it('Should return the Deleted main course', async () => {
    const maincourse: IMainCourse = maincourseDataSource.findOne(0);
    mockRepository.delete.mockReturnValue(maincourse);
    const deletedMaincourse: IMainCourse = await deleteMaincourseController.delete(
      '602c376933496501c30aa231',
    );
    expect(deletedMaincourse).toMatchObject(maincourse);
    expect(mockRepository.delete).toBeCalledTimes(1);
  });

  it('Should return a exception if main course not exist', async () => {
    mockRepository.delete.mockReturnValue(null);
    expect(
      deleteMaincourseController.delete('602c376933496501c30aa231'),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(mockRepository.delete).toBeCalledTimes(1);
  });
});
