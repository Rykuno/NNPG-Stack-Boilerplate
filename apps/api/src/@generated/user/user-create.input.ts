import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateNestedManyWithoutFollowerInput } from '../user-connections/user-connections-create-nested-many-without-follower.input';
import { UserConnectionsCreateNestedManyWithoutFollowingInput } from '../user-connections/user-connections-create-nested-many-without-following.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    usernameId!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => UserConnectionsCreateNestedManyWithoutFollowerInput, {nullable:true})
    following?: UserConnectionsCreateNestedManyWithoutFollowerInput;

    @Field(() => UserConnectionsCreateNestedManyWithoutFollowingInput, {nullable:true})
    followers?: UserConnectionsCreateNestedManyWithoutFollowingInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
