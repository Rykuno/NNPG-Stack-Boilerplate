import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateWithoutFollowerInput } from './user-connections-create-without-follower.input';

@InputType()
export class UserConnectionsCreateOrConnectWithoutFollowerInput {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsCreateWithoutFollowerInput, {nullable:false})
    @Type(() => UserConnectionsCreateWithoutFollowerInput)
    create!: UserConnectionsCreateWithoutFollowerInput;
}
