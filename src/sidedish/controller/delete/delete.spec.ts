import { Test } from '@nestjs/testing';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { DeleteSidedishController } from '.';
import { ISideDish } from '../../../shared/protocols/sidedish';
import { DeleteSideDishService } from '../../service/delete';
import { NotFoundException } from '@nestjs/common';
describe('CreateSideDishService', () => {
  let deleteSidedishController: DeleteSidedishController;
  const mockRepository = {
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteSidedishController,

        {
          provide: DeleteSideDishService,
          useValue: mockRepository,
        },
      ],
    }).compile();

    deleteSidedishController = module.get<DeleteSidedishController>(
      DeleteSidedishController,
    );
  });

  beforeEach(() => {
    mockRepository.delete.mockReset();
  });

  it('Should return the deleted side dish', async () => {
    const sideDish: ISideDish = sideDishDataSource.findOne(0);
    mockRepository.delete.mockReturnValue(sideDish);
    const deletedSideDish: ISideDish = await deleteSidedishController.delete(
      '602c376933496501c30aa231',
    );

    expect(sideDish).toEqual(deletedSideDish);
    expect(mockRepository.delete).toBeCalledTimes(1);
  });

  it('Should return a exception if side dish not found', async () => {
    mockRepository.delete.mockReturnValue(null);

    expect(
      deleteSidedishController.delete('602c376933496501c30aa231'),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(mockRepository.delete).toBeCalledTimes(1);
  });
});
