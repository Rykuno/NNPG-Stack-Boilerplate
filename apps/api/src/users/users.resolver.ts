import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { UploadService } from 'src/upload/upload.service';
import { SignedResponse } from 'src/upload/entities/signedResponse.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly uploadService: UploadService,
  ) {}

  @Query(() => User, { nullable: true })
  async me(@CurrentUser() user: User): Promise<User | null> {
    return user;
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => SignedResponse)
  @UseGuards(GqlAuthGuard)
  uploadAvatar(@CurrentUser() currentUser: User) {
    return this.uploadService.getSignedUrlForPut({
      fileType: 'jpg',
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
}
