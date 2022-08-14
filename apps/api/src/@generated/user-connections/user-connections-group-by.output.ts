import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserConnectionsCountAggregate } from './user-connections-count-aggregate.output';
import { UserConnectionsMinAggregate } from './user-connections-min-aggregate.output';
import { UserConnectionsMaxAggregate } from './user-connections-max-aggregate.output';

@ObjectType()
export class UserConnectionsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    followerId!: string;

    @Field(() => String, {nullable:false})
    followingId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserConnectionsCountAggregate, {nullable:true})
    _count?: UserConnectionsCountAggregate;

    @Field(() => UserConnectionsMinAggregate, {nullable:true})
    _min?: UserConnectionsMinAggregate;

    @Field(() => UserConnectionsMaxAggregate, {nullable:true})
    _max?: UserConnectionsMaxAggregate;
}
