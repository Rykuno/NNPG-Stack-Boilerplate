import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, UploadService],
  exports: [UsersService],
})
export class UsersModule {}
