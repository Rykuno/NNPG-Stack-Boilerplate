import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserUpsertWithoutFollowingInput } from './user-upsert-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingInput } from './user-update-without-following.input';

@InputType()
export class UserUpdateOneRequiredWithoutFollowingNestedInput {

    @Field(() => UserCreateWithoutFollowingInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowingInput)
    create?: UserCreateWithoutFollowingInput;

    @Field(() => UserCreateOrConnectWithoutFollowingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;

    @Field(() => UserUpsertWithoutFollowingInput, {nullable:true})
    @Type(() => UserUpsertWithoutFollowingInput)
    upsert?: UserUpsertWithoutFollowingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingInput, {nullable:true})
    @Type(() => UserUpdateWithoutFollowingInput)
    update?: UserUpdateWithoutFollowingInput;
}
