import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowersInput } from '../user/user-create-nested-one-without-followers.input';

@InputType()
export class UserConnectionsCreateWithoutFollowerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFollowersInput, {nullable:false})
    following!: UserCreateNestedOneWithoutFollowersInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
