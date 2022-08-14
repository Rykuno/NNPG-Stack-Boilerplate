import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsUpdateWithoutFollowerInput } from './user-connections-update-without-follower.input';
import { UserConnectionsCreateWithoutFollowerInput } from './user-connections-create-without-follower.input';

@InputType()
export class UserConnectionsUpsertWithWhereUniqueWithoutFollowerInput {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsUpdateWithoutFollowerInput, {nullable:false})
    @Type(() => UserConnectionsUpdateWithoutFollowerInput)
    update!: UserConnectionsUpdateWithoutFollowerInput;

    @Field(() => UserConnectionsCreateWithoutFollowerInput, {nullable:false})
    @Type(() => UserConnectionsCreateWithoutFollowerInput)
    create!: UserConnectionsCreateWithoutFollowerInput;
}
