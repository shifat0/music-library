import {
    IsArray,
    IsDateString,
    IsMilitaryTime,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class createSongDTO {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    readonly artists: string[];

    @IsNotEmpty()
    @IsString()
    readonly lyrics: string;

    @IsNotEmpty()
    @IsDateString()
    readonly release_date: Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: string;
}
