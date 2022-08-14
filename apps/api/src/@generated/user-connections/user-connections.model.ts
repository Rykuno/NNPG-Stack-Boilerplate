import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserConnections {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:false})
    follower?: User;

    @Field(() => String, {nullable:false})
    followerId!: string;

    @Field(() => User, {nullable:false})
    following?: User;

    @Field(() => String, {nullable:false})
    followingId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
