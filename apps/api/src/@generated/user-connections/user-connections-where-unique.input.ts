import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsFollowerIdFollowingIdCompoundUniqueInput } from './user-connections-follower-id-following-id-compound-unique.input';

@InputType()
export class UserConnectionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserConnectionsFollowerIdFollowingIdCompoundUniqueInput, {nullable:true})
    followerId_followingId?: UserConnectionsFollowerIdFollowingIdCompoundUniqueInput;
}
