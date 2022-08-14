import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFollowingNestedInput } from '../user/user-update-one-required-without-following-nested.input';
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from '../user/user-update-one-required-without-followers-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserConnectionsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowingNestedInput, {nullable:true})
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowersNestedInput, {nullable:true})
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
