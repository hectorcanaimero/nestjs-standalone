import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class ProvidersModule {}
