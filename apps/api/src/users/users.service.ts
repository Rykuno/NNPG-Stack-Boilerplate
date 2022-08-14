import { Injectable } from '@nestjs/common';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(where: UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
