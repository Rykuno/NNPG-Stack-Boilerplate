import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsWhereInput } from './user-connections-where.input';
import { Type } from 'class-transformer';
import { UserConnectionsOrderByWithRelationInput } from './user-connections-order-by-with-relation.input';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserConnectionsCountAggregateInput } from './user-connections-count-aggregate.input';
import { UserConnectionsMinAggregateInput } from './user-connections-min-aggregate.input';
import { UserConnectionsMaxAggregateInput } from './user-connections-max-aggregate.input';

@ArgsType()
export class UserConnectionsAggregateArgs {

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

    @Field(() => UserConnectionsCountAggregateInput, {nullable:true})
    _count?: UserConnectionsCountAggregateInput;

    @Field(() => UserConnectionsMinAggregateInput, {nullable:true})
    _min?: UserConnectionsMinAggregateInput;

    @Field(() => UserConnectionsMaxAggregateInput, {nullable:true})
    _max?: UserConnectionsMaxAggregateInput;
}
