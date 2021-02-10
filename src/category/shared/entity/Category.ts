import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  constructor(props: Omit<Category, 'id'>) {
    Object.assign(this, props);
  }
}
