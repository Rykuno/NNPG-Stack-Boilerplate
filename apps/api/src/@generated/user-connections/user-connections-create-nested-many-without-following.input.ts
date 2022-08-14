import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateWithoutFollowingInput } from './user-connections-create-without-following.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateOrConnectWithoutFollowingInput } from './user-connections-create-or-connect-without-following.input';
import { UserConnectionsCreateManyFollowingInputEnvelope } from './user-connections-create-many-following-input-envelope.input';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';

@InputType()
export class UserConnectionsCreateNestedManyWithoutFollowingInput {

    @Field(() => [UserConnectionsCreateWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsCreateWithoutFollowingInput)
    create?: Array<UserConnectionsCreateWithoutFollowingInput>;

    @Field(() => [UserConnectionsCreateOrConnectWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: Array<UserConnectionsCreateOrConnectWithoutFollowingInput>;

    @Field(() => UserConnectionsCreateManyFollowingInputEnvelope, {nullable:true})
    @Type(() => UserConnectionsCreateManyFollowingInputEnvelope)
    createMany?: UserConnectionsCreateManyFollowingInputEnvelope;

    @Field(() => [UserConnectionsWhereUniqueInput], {nullable:true})
    @Type(() => UserConnectionsWhereUniqueInput)
    connect?: Array<UserConnectionsWhereUniqueInput>;
}
