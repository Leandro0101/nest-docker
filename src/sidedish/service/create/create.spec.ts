import { Test } from '@nestjs/testing';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { CreateSideDishService } from './create';
import { CreateSideDishRepository } from '../../repositories/create';
import { ISideDish } from '../../../shared/protocols/sidedish';
describe('CreateSideDishService', () => {
  let createSideDishService: CreateSideDishService;
  const mockRepository = {
    exec: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateSideDishService,

        {
          provide: CreateSideDishRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    createSideDishService = module.get<CreateSideDishService>(
      CreateSideDishService,
    );
  });

  beforeEach(() => {
    mockRepository.exec.mockReset();
  });

  it('Should return the created side dish', async () => {
    const sideDish: ISideDish = sideDishDataSource.findOne(0);
    mockRepository.exec.mockReturnValue(sideDish);
    const savedSideDish = await createSideDishService.create(sideDish);
    expect(savedSideDish).toEqual(sideDish);
    expect(mockRepository.exec).toBeCalledTimes(1);
  });
});
