import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowingInput } from '../user/user-create-nested-one-without-following.input';
import { UserCreateNestedOneWithoutFollowersInput } from '../user/user-create-nested-one-without-followers.input';

@InputType()
export class UserConnectionsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFollowingInput, {nullable:false})
    follower!: UserCreateNestedOneWithoutFollowingInput;

    @Field(() => UserCreateNestedOneWithoutFollowersInput, {nullable:false})
    following!: UserCreateNestedOneWithoutFollowersInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
