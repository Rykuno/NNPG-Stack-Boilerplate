import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsUncheckedCreateNestedManyWithoutFollowerInput } from '../user-connections/user-connections-unchecked-create-nested-many-without-follower.input';
import { UserConnectionsUncheckedCreateNestedManyWithoutFollowingInput } from '../user-connections/user-connections-unchecked-create-nested-many-without-following.input';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => UserConnectionsUncheckedCreateNestedManyWithoutFollowerInput, {nullable:true})
    following?: UserConnectionsUncheckedCreateNestedManyWithoutFollowerInput;

    @Field(() => UserConnectionsUncheckedCreateNestedManyWithoutFollowingInput, {nullable:true})
    followers?: UserConnectionsUncheckedCreateNestedManyWithoutFollowingInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
