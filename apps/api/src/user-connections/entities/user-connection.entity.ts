import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class UserConnection extends BaseEntity {
  @Field(() => User)
  follower: User;
  followerId: string;

  @Field(() => User)
  following: User;
  followingId: string;
}
