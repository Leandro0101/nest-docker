// import { Test } from '@nestjs/testing';
// import { CreateSideDishRepository } from './create';
// import { getModelToken } from '@nestjs/mongoose';
// import { SideDishDataSource } from 'src/shared/datasource/sidedishDatasource';
// import mongoose from 'mongoose';
// describe('CreateSideDishRepository', () => {
//   const sideDishDataSource = new SideDishDataSource();
//   let createSideDishRepository: CreateSideDishRepository;
//   const mockRepository = {
//     create: jest.fn(),
//   };

//   beforeEach(async () => {
//     const module = await Test.createTestingModule({
//       providers: [
//         SideDish,
//         CreateSideDishRepository,

//         {
//           provide: getModelToken('SideDish'),
//           useValue: mockRepository,
//         },
//       ],
//     }).compile();

//     createSideDishRepository = module.get<CreateSideDishRepository>(
//       CreateSideDishRepository,
//     );
//   });

//   describe('findAll', () => {
//     it('should return anything', async () => {
//       mockRepository.create.mockReturnValue([
//         { name: 'teste', price: 99 },
//         { name: 'teste', price: 88 },
//       ]);
//       const sidedish = sideDishDataSource.findOne(0);
//       const testes = await createSideDishRepository.exec(schema);

//       expect(1).toBe(1);
//     });
//   });
// });
