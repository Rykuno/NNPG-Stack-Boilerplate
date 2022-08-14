import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
  Int,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { UploadService } from 'src/upload/upload.service';
import { SignedResponse } from 'src/upload/entities/signedResponse.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly uploadService: UploadService,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => User, { nullable: true })
  async me(@CurrentUser() user: User): Promise<User | null> {
    return user;
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.findOne(where);
  }

  @Mutation(() => SignedResponse)
  @UseGuards(GqlAuthGuard)
  uploadAvatar(
    @Args('fileType') fileType: string,
    @CurrentUser() currentUser: User,
  ) {
    return this.uploadService.getSignedUrlForPut({
      fileType,
      key: `users/${currentUser.id}/avatar`,
    });
  }

  @ResolveField(() => String)
  avatar(@Parent() user: User) {
    return (
      user?.avatar ||
      `https://avatars.dicebear.com/api/identicon/${user.id}.svg`
    );
  }

  @ResolveField(() => Int)
  followerCount(@Parent() user: User) {
    return this.prisma.userConnections.count({
      where: { followingId: user.id },
    });
  }

  @ResolveField(() => Int)
  followingCount(@Parent() user: User) {
    return this.prisma.userConnections.count({
      where: { followerId: user.id },
    });
  }

  @ResolveField(() => Boolean)
  isMe(@Parent() user: User, @CurrentUser() currentUser: User) {
    return user.id === currentUser?.id;
  }

  @ResolveField(() => Boolean)
  async isFollowing(@Parent() user: User, @CurrentUser() currentUser: User) {
    if (!currentUser) return false;
    return !!(await this.prisma.userConnections.count({
      where: {
        followingId: user.id,
        followerId: currentUser.id,
      },
    }));
  }
}
