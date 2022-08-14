import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserConnectionsCountOrderByAggregateInput } from './user-connections-count-order-by-aggregate.input';
import { UserConnectionsMaxOrderByAggregateInput } from './user-connections-max-order-by-aggregate.input';
import { UserConnectionsMinOrderByAggregateInput } from './user-connections-min-order-by-aggregate.input';

@InputType()
export class UserConnectionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserConnectionsCountOrderByAggregateInput, {nullable:true})
    _count?: UserConnectionsCountOrderByAggregateInput;

    @Field(() => UserConnectionsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserConnectionsMaxOrderByAggregateInput;

    @Field(() => UserConnectionsMinOrderByAggregateInput, {nullable:true})
    _min?: UserConnectionsMinOrderByAggregateInput;
}
