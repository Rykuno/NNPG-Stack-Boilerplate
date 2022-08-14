import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsWhereInput } from './user-connections-where.input';

@InputType()
export class UserConnectionsListRelationFilter {

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    every?: UserConnectionsWhereInput;

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    some?: UserConnectionsWhereInput;

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    none?: UserConnectionsWhereInput;
}
