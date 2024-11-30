import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // creating a local db

    private readonly songs = [];

    create(song: any) {
        this.songs.push(song);
        return this.songs[this.songs.length - 1];
    }

    findAll() {
        return this.songs;
    }

    findOne(id: string) {
        return this.songs[id];
    }
}
