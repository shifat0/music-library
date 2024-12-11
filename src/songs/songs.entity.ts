import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Songs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('text', { array: true })
    artists: string[];

    @Column('text', { nullable: false, default: '' })
    lyrics: string;

    @Column('date')
    release_date: Date;

    @Column('time')
    duration: string;
}
