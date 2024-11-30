import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Post()
    create() {
        return 'This is song create route';
    }

    @Get()
    findAll() {
        return 'This is all songs route';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This is single song route: ${id}`;
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
