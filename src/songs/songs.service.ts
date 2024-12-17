import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Songs } from './songs.entity';
import { createSongDTO } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { updateSongDTO } from './dto/update-song-dto';

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Songs) private songRepository: Repository<Songs>,
    ) {}

    async create(songDTO: createSongDTO): Promise<Songs> {
        const song = new Songs();
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.release_date = songDTO.release_date;

        return await this.songRepository.save(song);
    }

    findAll() {
        return this.songRepository.find();
    }

    findOne(id: number): Promise<Songs> {
        return this.songRepository.findOneBy({ id });
    }

    remove(id: number): Promise<DeleteResult> {
        return this.songRepository.delete(id);
    }

    update(id: number, recordToUpdate: updateSongDTO): Promise<UpdateResult> {
        return this.songRepository.update(id, recordToUpdate);
    }
}
