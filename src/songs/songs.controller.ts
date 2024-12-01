import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { creatSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Post()
    create(@Body() createSongDTO: creatSongDTO) {
        return this.songsService.create(createSongDTO);
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
