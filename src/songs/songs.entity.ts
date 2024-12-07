import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Songs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('varchar')
    artist: string;

    @Column('date')
    release_date: Date;

    @Column('time')
    duration: Date;
}