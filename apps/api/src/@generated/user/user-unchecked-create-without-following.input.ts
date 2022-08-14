import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsUncheckedCreateNestedManyWithoutFollowingInput } from '../user-connections/user-connections-unchecked-create-nested-many-without-following.input';

@InputType()
export class UserUncheckedCreateWithoutFollowingInput {

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

    @Field(() => UserConnectionsUncheckedCreateNestedManyWithoutFollowingInput, {nullable:true})
    followers?: UserConnectionsUncheckedCreateNestedManyWithoutFollowingInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
