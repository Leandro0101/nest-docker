import { Test } from '@nestjs/testing';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { FindAllSideDishService } from './findAll';
import { FindAllSideDishRepository } from '../../repositories/findAll';
import { ISideDish } from 'src/shared/protocols/sidedish';
describe('FindAllSideDishService', () => {
  let findAllSideDishService: FindAllSideDishService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FindAllSideDishService,

        {
          provide: FindAllSideDishRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    findAllSideDishService = module.get<FindAllSideDishService>(
      FindAllSideDishService,
    );
  });

  beforeEach(() => {
    mockRepository.exec.mockReset();
  });

  it('Should return all side dishes', async () => {
    const sideDishes: ISideDish[] = sideDishDataSource.findAll();

    mockRepository.exec.mockReturnValue(sideDishes);

    const returnedSideDishes: ISideDish[] = await findAllSideDishService.findAll();

    expect(returnedSideDishes).toHaveLength(sideDishes.length);
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
