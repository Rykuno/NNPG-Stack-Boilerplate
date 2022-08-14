import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsWhereInput } from './user-connections-where.input';
import { Type } from 'class-transformer';
import { UserConnectionsOrderByWithAggregationInput } from './user-connections-order-by-with-aggregation.input';
import { UserConnectionsScalarFieldEnum } from './user-connections-scalar-field.enum';
import { UserConnectionsScalarWhereWithAggregatesInput } from './user-connections-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserConnectionsCountAggregateInput } from './user-connections-count-aggregate.input';
import { UserConnectionsMinAggregateInput } from './user-connections-min-aggregate.input';
import { UserConnectionsMaxAggregateInput } from './user-connections-max-aggregate.input';

@ArgsType()
export class UserConnectionsGroupByArgs {

    @Field(() => UserConnectionsWhereInput, {nullable:true})
    @Type(() => UserConnectionsWhereInput)
    where?: UserConnectionsWhereInput;

    @Field(() => [UserConnectionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserConnectionsOrderByWithAggregationInput>;

    @Field(() => [UserConnectionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserConnectionsScalarFieldEnum>;

    @Field(() => UserConnectionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserConnectionsScalarWhereWithAggregatesInput;

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
