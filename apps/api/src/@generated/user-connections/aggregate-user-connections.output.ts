import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserConnectionsCountAggregate } from './user-connections-count-aggregate.output';
import { UserConnectionsMinAggregate } from './user-connections-min-aggregate.output';
import { UserConnectionsMaxAggregate } from './user-connections-max-aggregate.output';

@ObjectType()
export class AggregateUserConnections {

    @Field(() => UserConnectionsCountAggregate, {nullable:true})
    _count?: UserConnectionsCountAggregate;

    @Field(() => UserConnectionsMinAggregate, {nullable:true})
    _min?: UserConnectionsMinAggregate;

    @Field(() => UserConnectionsMaxAggregate, {nullable:true})
    _max?: UserConnectionsMaxAggregate;
}
