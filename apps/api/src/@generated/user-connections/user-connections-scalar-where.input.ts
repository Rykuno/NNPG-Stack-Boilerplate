import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserConnectionsScalarWhereInput {

    @Field(() => [UserConnectionsScalarWhereInput], {nullable:true})
    AND?: Array<UserConnectionsScalarWhereInput>;

    @Field(() => [UserConnectionsScalarWhereInput], {nullable:true})
    OR?: Array<UserConnectionsScalarWhereInput>;

    @Field(() => [UserConnectionsScalarWhereInput], {nullable:true})
    NOT?: Array<UserConnectionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    followerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    followingId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
