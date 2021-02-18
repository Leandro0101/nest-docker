import { Test } from '@nestjs/testing';
import { DeleteSideDishRepository } from 'src/sidedish/repositories/delete';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { ISideDish } from '../../../shared/protocols/sidedish';
import { DeleteSideDishService } from './delete';
describe('DeleteSideDishService', () => {
  let deleteSideDishService: DeleteSideDishService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteSideDishService,

        {
          provide: DeleteSideDishRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    deleteSideDishService = module.get<DeleteSideDishService>(
      DeleteSideDishService,
    );
  });

  it('Should return the Deleted side dish', async () => {
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
