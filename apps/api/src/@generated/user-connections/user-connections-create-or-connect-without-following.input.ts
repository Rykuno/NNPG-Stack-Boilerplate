import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateWithoutFollowingInput } from './user-connections-create-without-following.input';

@InputType()
export class UserConnectionsCreateOrConnectWithoutFollowingInput {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsCreateWithoutFollowingInput, {nullable:false})
    @Type(() => UserConnectionsCreateWithoutFollowingInput)
    create!: UserConnectionsCreateWithoutFollowingInput;
}
