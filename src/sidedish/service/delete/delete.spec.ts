import { Test } from '@nestjs/testing';
import { DeleteSideDishRepository } from '../../repositories/delete';
import { FindSideDishByIdRepository } from '../../repositories/findById';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { ISideDish } from '../../../shared/protocols/sidedish';
import { DeleteSideDishService } from './delete';
describe('DeleteSideDishService', () => {
  let deleteSideDishService: DeleteSideDishService;

  const mockDeleteRepository = {
    exec: jest.fn(),
  };

  const mockFindByIdRepository = {
    exec: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteSideDishService,

        {
          provide: DeleteSideDishRepository,
          useValue: mockDeleteRepository,
        },
        {
          provide: FindSideDishByIdRepository,
          useValue: mockFindByIdRepository,
        },
      ],
    }).compile();

    deleteSideDishService = module.get<DeleteSideDishService>(
      DeleteSideDishService,
    );
  });

  it('Should return the deleted side dish', async () => {
    const sidedish: ISideDish = sideDishDataSource.findOne(0);

    mockFindByIdRepository.exec.mockReturnValue(sidedish);
    mockDeleteRepository.exec.mockReturnValue(sidedish);

    const deletedSideDish: ISideDish = await deleteSideDishService.delete(
      '602c376933496501c30aa231',
    );

    expect(deletedSideDish).toEqual(sidedish);
    expect(mockDeleteRepository.exec).toBeCalledTimes(1);
    expect(mockFindByIdRepository.exec).toBeCalledTimes(1);
  });
});
