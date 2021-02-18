import { Test } from '@nestjs/testing';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { FindSideDishByIdService } from '.';
import { FindSideDishByIdRepository } from '../../repositories/findById';
import { ISideDish } from 'src/shared/protocols/sidedish';
describe('FindAllSideDishService', () => {
  let findSideDishByIdService: FindSideDishByIdService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FindSideDishByIdService,
        {
          provide: FindSideDishByIdRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    findSideDishByIdService = module.get<FindSideDishByIdService>(
      FindSideDishByIdService,
    );
  });

  beforeEach(() => {
    mockRepository.exec.mockReset();
  });

  it('Should return found side side dish', async () => {
    const sidedish: ISideDish = sideDishDataSource.findOne(0);

    mockRepository.exec.mockReturnValue(sidedish);

    const returnedSideDish: ISideDish = await findSideDishByIdService.findById(
      'sidedish',
    );

    expect(returnedSideDish).toMatchObject(sidedish);
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
