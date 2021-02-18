import { Test } from '@nestjs/testing';
import { CreateSideDishRepository } from './create';
import { getModelToken } from '@nestjs/mongoose';
import { SideDishDataSource } from '../../../shared/datasource/sidedishDatasource';
describe('CreateSideDishRepository', () => {
  const sideDishDataSource = new SideDishDataSource();
  let createSideDishRepository: CreateSideDishRepository;
  const mockRepository = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateSideDishRepository,

        {
          provide: getModelToken('SideDish'),
          useValue: mockRepository,
        },
      ],
    }).compile();

    createSideDishRepository = module.get<CreateSideDishRepository>(
      CreateSideDishRepository,
    );
  });

  describe('findAll', () => {
    it('should return anything', async () => {
      mockRepository.save.mockReturnValue([
        { name: 'teste', price: 99 },
        { name: 'teste', price: 88 },
      ]);
      const sidedish = sideDishDataSource.findOne(0);
      const createdSideDish = await createSideDishRepository.exec(sidedish);

      expect(createdSideDish).toBe(sidedish);
    });
  });
});
