import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongDTO } from './dto/create-song-dto';
import { updateSongDTO } from './dto/update-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Post()
    create(@Body() createSongDTO: createSongDTO) {
        console.log(createSongDTO);
        return this.songsService.create(createSongDTO);
    }

    @Get()
    async findAll() {
        const songs = await this.songsService.findAll();

        return {
            message: 'All songs fetched successfully',
            data: songs,
        };
    }

    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return this.songsService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSongDTO: updateSongDTO,
    ) {
        return this.songsService.update(id, updateSongDTO);
    }

    @Delete(':id')
    delete(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return this.songsService.remove(id);
    }
}
