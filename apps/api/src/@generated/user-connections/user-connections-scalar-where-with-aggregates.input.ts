import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserConnectionsScalarWhereWithAggregatesInput {

    @Field(() => [UserConnectionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserConnectionsScalarWhereWithAggregatesInput>;

    @Field(() => [UserConnectionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserConnectionsScalarWhereWithAggregatesInput>;

    @Field(() => [UserConnectionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserConnectionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    followerId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    followingId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
