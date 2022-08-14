import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserConnectionsUncheckedUpdateManyWithoutFollowerNestedInput } from '../user-connections/user-connections-unchecked-update-many-without-follower-nested.input';
import { UserConnectionsUncheckedUpdateManyWithoutFollowingNestedInput } from '../user-connections/user-connections-unchecked-update-many-without-following-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    usernameId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    displayName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserConnectionsUncheckedUpdateManyWithoutFollowerNestedInput, {nullable:true})
    following?: UserConnectionsUncheckedUpdateManyWithoutFollowerNestedInput;

    @Field(() => UserConnectionsUncheckedUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followers?: UserConnectionsUncheckedUpdateManyWithoutFollowingNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
