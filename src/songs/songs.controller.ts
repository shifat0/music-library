import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Post()
    create() {
        return this.songsService.create('Tamak Pata by Ashes');
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.songsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `This is update song route: ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return `This is delete song route: ${id}`;
    }
}
