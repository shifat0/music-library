import {
    IsArray,
    IsDateString,
    IsMilitaryTime,
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class updateSongDTO {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsArray()
    @IsOptional()
    readonly artists: string[];

    @IsString()
    @IsOptional()
    readonly lyrics: string;

    @IsDateString()
    @IsOptional()
    readonly release_date: Date;

    @IsMilitaryTime()
    @IsOptional()
    readonly duration: string;
}
