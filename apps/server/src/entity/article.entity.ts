import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  tag_id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  desc: string;

  @Column('text')
  content: string;

  @Column('varchar')
  cover_image_url: string;

  @Column('int')
  created_on: number;

  @Column('varchar')
  created_by: string;

  @Column('int')
  modified_on: string;

  @Column('varchar')
  modified_by: string;

  @Column('int')
  deleted_on: string;

  @Column('int')
  state: number;
}
