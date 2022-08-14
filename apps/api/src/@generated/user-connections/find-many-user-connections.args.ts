import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsWhereInput } from './user-connections-where.input';
import { Type } from 'class-transformer';
import { UserConnectionsOrderByWithRelationInput } from './user-connections-order-by-with-relation.input';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserConnectionsScalarFieldEnum } from './user-connections-scalar-field.enum';

@ArgsType()
export class FindManyUserConnectionsArgs {

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    @Type(() => UserConnectionsWhereInput)
    where?: UserConnectionsWhereInput;

    @Field(() => [UserConnectionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserConnectionsOrderByWithRelationInput>;

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:true})
    cursor?: UserConnectionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserConnectionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserConnectionsScalarFieldEnum>;
}
