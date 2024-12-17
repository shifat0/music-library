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

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Post()
    create(@Body() createSongDTO: createSongDTO) {
        console.log(createSongDTO);
        return this.songsService.create(createSongDTO);
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
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
    update(@Param('id') id: string) {
        return `This is update song route: ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return `This is delete song route: ${id}`;
    }
}
