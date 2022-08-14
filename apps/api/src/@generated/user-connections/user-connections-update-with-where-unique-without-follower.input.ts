import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsUpdateWithoutFollowerInput } from './user-connections-update-without-follower.input';

@InputType()
export class UserConnectionsUpdateWithWhereUniqueWithoutFollowerInput {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsUpdateWithoutFollowerInput, {nullable:false})
    @Type(() => UserConnectionsUpdateWithoutFollowerInput)
    data!: UserConnectionsUpdateWithoutFollowerInput;
}
