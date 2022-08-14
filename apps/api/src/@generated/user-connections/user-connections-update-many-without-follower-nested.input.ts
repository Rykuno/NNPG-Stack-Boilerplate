import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateWithoutFollowerInput } from './user-connections-create-without-follower.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateOrConnectWithoutFollowerInput } from './user-connections-create-or-connect-without-follower.input';
import { UserConnectionsUpsertWithWhereUniqueWithoutFollowerInput } from './user-connections-upsert-with-where-unique-without-follower.input';
import { UserConnectionsCreateManyFollowerInputEnvelope } from './user-connections-create-many-follower-input-envelope.input';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { UserConnectionsUpdateWithWhereUniqueWithoutFollowerInput } from './user-connections-update-with-where-unique-without-follower.input';
import { UserConnectionsUpdateManyWithWhereWithoutFollowerInput } from './user-connections-update-many-with-where-without-follower.input';
import { UserConnectionsScalarWhereInput } from './user-connections-scalar-where.input';

@InputType()
export class UserConnectionsUpdateManyWithoutFollowerNestedInput {

    @Field(() => [UserConnectionsCreateWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsCreateWithoutFollowerInput)
    create?: Array<UserConnectionsCreateWithoutFollowerInput>;

    @Field(() => [UserConnectionsCreateOrConnectWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsCreateOrConnectWithoutFollowerInput)
    connectOrCreate?: Array<UserConnectionsCreateOrConnectWithoutFollowerInput>;

    @Field(() => [UserConnectionsUpsertWithWhereUniqueWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsUpsertWithWhereUniqueWithoutFollowerInput)
    upsert?: Array<UserConnectionsUpsertWithWhereUniqueWithoutFollowerInput>;

    @Field(() => UserConnectionsCreateManyFollowerInputEnvelope, {nullable:true})
    @Type(() => UserConnectionsCreateManyFollowerInputEnvelope)
    createMany?: UserConnectionsCreateManyFollowerInputEnvelope;

    @Field(() => [UserConnectionsWhereUniqueInput], {nullable:true})
    @Type(() => UserConnectionsWhereUniqueInput)
    set?: Array<UserConnectionsWhereUniqueInput>;

    @Field(() => [UserConnectionsWhereUniqueInput], {nullable:true})
    @Type(() => UserConnectionsWhereUniqueInput)
    disconnect?: Array<UserConnectionsWhereUniqueInput>;

    @Field(() => [UserConnectionsWhereUniqueInput], {nullable:true})
    @Type(() => UserConnectionsWhereUniqueInput)
    delete?: Array<UserConnectionsWhereUniqueInput>;

    @Field(() => [UserConnectionsWhereUniqueInput], {nullable:true})
    @Type(() => UserConnectionsWhereUniqueInput)
    connect?: Array<UserConnectionsWhereUniqueInput>;

    @Field(() => [UserConnectionsUpdateWithWhereUniqueWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsUpdateWithWhereUniqueWithoutFollowerInput)
    update?: Array<UserConnectionsUpdateWithWhereUniqueWithoutFollowerInput>;

    @Field(() => [UserConnectionsUpdateManyWithWhereWithoutFollowerInput], {nullable:true})
    @Type(() => UserConnectionsUpdateManyWithWhereWithoutFollowerInput)
    updateMany?: Array<UserConnectionsUpdateManyWithWhereWithoutFollowerInput>;

    @Field(() => [UserConnectionsScalarWhereInput], {nullable:true})
    @Type(() => UserConnectionsScalarWhereInput)
    deleteMany?: Array<UserConnectionsScalarWhereInput>;
}
