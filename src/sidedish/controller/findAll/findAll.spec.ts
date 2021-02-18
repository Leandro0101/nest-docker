import { Test } from '@nestjs/testing';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { FindAllSidedishController } from '.';
import { ISideDish } from '../../../shared/protocols/sidedish';
import { FindAllSideDishService } from '../../service/findAll';
describe('CreateSideDishService', () => {
  let findAllSidedishController: FindAllSidedishController;
  const mockRepository = {
    findAll: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FindAllSidedishController,

        {
          provide: FindAllSideDishService,
          useValue: mockRepository,
        },
      ],
    }).compile();

    findAllSidedishController = module.get<FindAllSidedishController>(
      FindAllSidedishController,
    );
  });

  beforeEach(() => {
    mockRepository.findAll.mockReset();
  });

  it('Should return all founds side dishes', async () => {
    const sideDishes: ISideDish[] = sideDishDataSource.findAll();
    mockRepository.findAll.mockReturnValue(sideDishes);
    const returnedSideDishes: ISideDish[] = await findAllSidedishController.findAll();
    expect(returnedSideDishes).toHaveLength(sideDishes.length);
    expect(mockRepository.findAll).toBeCalledTimes(1);
  });
});
