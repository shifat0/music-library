import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Songs } from './songs/songs.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            database: 'music-library',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            entities: [Songs],
            synchronize: true,
        }),
        SongsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes('songs');
    }
}
