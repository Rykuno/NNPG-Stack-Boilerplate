import { Injectable } from '@nestjs/common';
import { UserConnectionsWhereUniqueInput } from 'src/@generated/user-connections/user-connections-where-unique.input';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/users/entities/user.entity';
import { ToggleUserConnectionInput } from './dto/toggle-user-connection.input';

@Injectable()
export class UserConnectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async toggle(data: ToggleUserConnectionInput, currentUser: User) {
    const existingConnetion = await this.findOne({
      followerId_followingId: {
        followingId: data.followingId,
        followerId: currentUser.id,
      },
    });

    if (existingConnetion) {
      return this.remove(existingConnetion.id);
    }

    return this.create(data.followingId, currentUser.id);
  }

  create(followingId: string, followerId: string) {
    return this.prisma.userConnections.create({
      data: {
        follower: {
          connect: {
            id: followerId,
          },
        },
        following: {
          connect: {
            id: followingId,
          },
        },
      },
    });
  }

  findOne(where: UserConnectionsWhereUniqueInput) {
    return this.prisma.userConnections.findUnique({ where });
  }

  remove(id: string) {
    return this.prisma.userConnections.delete({ where: { id } });
  }
}
