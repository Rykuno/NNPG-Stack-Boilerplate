import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateWithoutFollowingInput } from './user-connections-create-without-following.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateOrConnectWithoutFollowingInput } from './user-connections-create-or-connect-without-following.input';
import { UserConnectionsUpsertWithWhereUniqueWithoutFollowingInput } from './user-connections-upsert-with-where-unique-without-following.input';
import { UserConnectionsCreateManyFollowingInputEnvelope } from './user-connections-create-many-following-input-envelope.input';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { UserConnectionsUpdateWithWhereUniqueWithoutFollowingInput } from './user-connections-update-with-where-unique-without-following.input';
import { UserConnectionsUpdateManyWithWhereWithoutFollowingInput } from './user-connections-update-many-with-where-without-following.input';
import { UserConnectionsScalarWhereInput } from './user-connections-scalar-where.input';

@InputType()
export class UserConnectionsUpdateManyWithoutFollowingNestedInput {

    @Field(() => [UserConnectionsCreateWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsCreateWithoutFollowingInput)
    create?: Array<UserConnectionsCreateWithoutFollowingInput>;

    @Field(() => [UserConnectionsCreateOrConnectWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: Array<UserConnectionsCreateOrConnectWithoutFollowingInput>;

    @Field(() => [UserConnectionsUpsertWithWhereUniqueWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsUpsertWithWhereUniqueWithoutFollowingInput)
    upsert?: Array<UserConnectionsUpsertWithWhereUniqueWithoutFollowingInput>;

    @Field(() => UserConnectionsCreateManyFollowingInputEnvelope, {nullable:true})
    @Type(() => UserConnectionsCreateManyFollowingInputEnvelope)
    createMany?: UserConnectionsCreateManyFollowingInputEnvelope;

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

    @Field(() => [UserConnectionsUpdateWithWhereUniqueWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsUpdateWithWhereUniqueWithoutFollowingInput)
    update?: Array<UserConnectionsUpdateWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserConnectionsUpdateManyWithWhereWithoutFollowingInput], {nullable:true})
    @Type(() => UserConnectionsUpdateManyWithWhereWithoutFollowingInput)
    updateMany?: Array<UserConnectionsUpdateManyWithWhereWithoutFollowingInput>;

    @Field(() => [UserConnectionsScalarWhereInput], {nullable:true})
    @Type(() => UserConnectionsScalarWhereInput)
    deleteMany?: Array<UserConnectionsScalarWhereInput>;
}
