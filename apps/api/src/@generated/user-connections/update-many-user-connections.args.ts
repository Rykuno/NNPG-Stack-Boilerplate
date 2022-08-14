import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsUpdateManyMutationInput } from './user-connections-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserConnectionsWhereInput } from './user-connections-where.input';

@ArgsType()
export class UpdateManyUserConnectionsArgs {

    @Field(() => UserConnectionsUpdateManyMutationInput, {nullable:false})
    @Type(() => UserConnectionsUpdateManyMutationInput)
    data!: UserConnectionsUpdateManyMutationInput;

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    @Type(() => UserConnectionsWhereInput)
    where?: UserConnectionsWhereInput;
}
