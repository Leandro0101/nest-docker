import { ISideDish } from '../protocols/sidedish';

class SideDishDataSource {
  private sidedishes: ISideDish[] = [
    { name: 'sidedish 1', price: 25 },
    { name: 'sidedish 2', price: 15 },
    { name: 'sidedish 3', price: 25 },
    { name: 'sidedish 4', price: 23 },
    { name: 'sidedish 5', price: 50 },
  ];

  findOne(index: number): ISideDish {
    const sideDish: ISideDish = this.sidedishes[index];
    return sideDish;
  }

  findAll(): ISideDish[] {
    return this.sidedishes;
  }
}

export default new SideDishDataSource();
