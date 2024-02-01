import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achat } from './achats/achat.entity';
import { AchatsModule } from './achats/achats.module';
import { ConfigModule } from './config/config.module';
import { Config } from './config/config.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      entities: [Achat, Config],
      synchronize: true,
    }),
    AchatsModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
