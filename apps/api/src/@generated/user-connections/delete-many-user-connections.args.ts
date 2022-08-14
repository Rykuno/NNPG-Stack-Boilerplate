import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsWhereInput } from './user-connections-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserConnectionsArgs {

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    @Type(() => UserConnectionsWhereInput)
    where?: UserConnectionsWhereInput;
}
