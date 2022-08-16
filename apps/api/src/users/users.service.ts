import { Injectable } from '@nestjs/common';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(where: UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where,
    });
  }

  update(data: UpdateUserInput, currentUser: User) {
    return this.prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        username: data?.username,
        usernameId: data?.username?.toLowerCase(),
        displayName: data?.displayName,
        avatar: data?.avatar,
        banner: data?.banner,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
