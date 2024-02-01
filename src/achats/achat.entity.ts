import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Achat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categorie: string;

  @Column('double')
  montant: number;

  @Column()
  date: string;

  @Column()
  person: string;

  @Column()
  label: string;
}
