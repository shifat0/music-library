import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Songs } from './songs.entity';
import { createSongDTO } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Songs) private songRepository: Repository<Songs>,
    ) {}

    private readonly songs = [];

    async create(songDTO: createSongDTO): Promise<Songs> {
        const song = new Songs();
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.release_date = songDTO.release_date;

        return await this.songRepository.save(song);
    }

    findAll() {
        return this.songs;
    }

    findOne(id: string) {
        return this.songs[id];
    }
}
