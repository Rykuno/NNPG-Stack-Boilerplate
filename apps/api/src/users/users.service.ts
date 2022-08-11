import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  findOne(username: string) {
    return this.prisma.user.findFirst({
      where: { usernameId: username.toLowerCase() },
    });
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
