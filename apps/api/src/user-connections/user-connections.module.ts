import { Module } from '@nestjs/common';
import { UserConnectionsService } from './user-connections.service';
import { UserConnectionsResolver } from './user-connections.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserConnectionsResolver, UserConnectionsService, PrismaService],
})
export class UserConnectionsModule {}
