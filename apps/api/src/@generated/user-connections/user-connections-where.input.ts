import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserConnectionsWhereInput {

    @Field(() => [UserConnectionsWhereInput], {nullable:true})
    AND?: Array<UserConnectionsWhereInput>;

    @Field(() => [UserConnectionsWhereInput], {nullable:true})
    OR?: Array<UserConnectionsWhereInput>;

    @Field(() => [UserConnectionsWhereInput], {nullable:true})
    NOT?: Array<UserConnectionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    follower?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    followerId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    following?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    followingId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
