import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateWithoutFollowerInput } from './user-connections-create-without-follower.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateOrConnectWithoutFollowerInput } from './user-connections-create-or-connect-without-follower.input';
import { UserConnectionsCreateManyFollowerInputEnvelope } from './user-connections-create-many-follower-input-envelope.input';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';

@InputType()
export class UserConnectionsCreateNestedManyWithoutFollowerInput {

    @Field(() => [UserConnectionsCreateWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsCreateWithoutFollowerInput)
    create?: Array<UserConnectionsCreateWithoutFollowerInput>;

    @Field(() => [UserConnectionsCreateOrConnectWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsCreateOrConnectWithoutFollowerInput)
    connectOrCreate?: Array<UserConnectionsCreateOrConnectWithoutFollowerInput>;

    @Field(() => UserConnectionsCreateManyFollowerInputEnvelope, {nullable:true})
    @Type(() => UserConnectionsCreateManyFollowerInputEnvelope)
    createMany?: UserConnectionsCreateManyFollowerInputEnvelope;

    @Field(() => [UserConnectionsWhereUniqueInput], {nullable:true})
    @Type(() => UserConnectionsWhereUniqueInput)
    connect?: Array<UserConnectionsWhereUniqueInput>;
}
