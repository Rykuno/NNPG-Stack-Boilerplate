import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsScalarWhereInput } from './user-connections-scalar-where.input';
import { Type } from 'class-transformer';
import { UserConnectionsUpdateManyMutationInput } from './user-connections-update-many-mutation.input';

@InputType()
export class UserConnectionsUpdateManyWithWhereWithoutFollowerInput {

    @Field(() => UserConnectionsScalarWhereInput, {nullable:false})
    @Type(() => UserConnectionsScalarWhereInput)
    where!: UserConnectionsScalarWhereInput;

    @Field(() => UserConnectionsUpdateManyMutationInput, {nullable:false})
    @Type(() => UserConnectionsUpdateManyMutationInput)
    data!: UserConnectionsUpdateManyMutationInput;
}
