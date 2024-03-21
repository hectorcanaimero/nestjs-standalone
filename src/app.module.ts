import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EntitiesModule } from '@entity/modules.module';
import { ProvidersModule } from '@provider/database.module';

@Module({
  imports: [EntitiesModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
