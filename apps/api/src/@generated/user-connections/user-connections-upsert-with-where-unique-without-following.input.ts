import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsUpdateWithoutFollowingInput } from './user-connections-update-without-following.input';
import { UserConnectionsCreateWithoutFollowingInput } from './user-connections-create-without-following.input';

@InputType()
export class UserConnectionsUpsertWithWhereUniqueWithoutFollowingInput {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => UserConnectionsUpdateWithoutFollowingInput)
    update!: UserConnectionsUpdateWithoutFollowingInput;

    @Field(() => UserConnectionsCreateWithoutFollowingInput, {nullable:false})
    @Type(() => UserConnectionsCreateWithoutFollowingInput)
    create!: UserConnectionsCreateWithoutFollowingInput;
}
