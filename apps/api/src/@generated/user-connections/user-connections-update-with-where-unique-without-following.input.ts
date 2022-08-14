import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsUpdateWithoutFollowingInput } from './user-connections-update-without-following.input';

@InputType()
export class UserConnectionsUpdateWithWhereUniqueWithoutFollowingInput {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => UserConnectionsUpdateWithoutFollowingInput)
    data!: UserConnectionsUpdateWithoutFollowingInput;
}
