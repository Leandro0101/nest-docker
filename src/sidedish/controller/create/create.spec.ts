import { Test } from '@nestjs/testing';
import sideDishDataSource from '../../../shared/datasource/sidedishDatasource';
import { CreateSidedishController } from '.';
import { ISideDish } from '../../../shared/protocols/sidedish';
import { CreateSideDishService } from '../../service/create';
describe('CreateSideDishService', () => {
  let createSidedishController: CreateSidedishController;
  const mockRepository = {
    create: jest.fn(),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateSidedishController,

        {
          provide: CreateSideDishService,
          useValue: mockRepository,
        },
      ],
    }).compile();

    createSidedishController = module.get<CreateSidedishController>(
      CreateSidedishController,
    );
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
  });

  it('Should return the created side dish', async () => {
    const sideDish: ISideDish = sideDishDataSource.findOne(0);
    mockRepository.create.mockReturnValue(sideDish);
    const createdSideDish: ISideDish = await createSidedishController.create(
      sideDish,
    );
    expect(createdSideDish).toMatchObject(sideDish);
    expect(mockRepository.create).toBeCalledTimes(1);
  });
});
