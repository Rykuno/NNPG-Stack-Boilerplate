import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserConnectionsService } from './user-connections.service';
import { UserConnection } from './entities/user-connection.entity';
import { ToggleUserConnectionInput } from './dto/toggle-user-connection.input';
import { UpdateUserConnectionInput } from './dto/update-user-connection.input';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { User } from 'src/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => UserConnection)
export class UserConnectionsResolver {
  constructor(
    private readonly userConnectionsService: UserConnectionsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => UserConnection)
  @UseGuards(GqlAuthGuard)
  toggleUserConnection(
    @Args('data')
    data: ToggleUserConnectionInput,
    @CurrentUser() currentUser: User,
  ) {
    return this.userConnectionsService.toggle(data, currentUser);
  }

  @ResolveField(() => User)
  follower(@Parent() connection: UserConnection) {
    return this.prisma.user.findUnique({
      where: { id: connection.followerId },
    });
  }

  @ResolveField(() => User)
  following(@Parent() connection: UserConnection) {
    return this.prisma.user.findUnique({
      where: { id: connection.followingId },
    });
  }
}
