import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateManyFollowerInput } from './user-connections-create-many-follower.input';
import { Type } from 'class-transformer';

@InputType()
export class UserConnectionsCreateManyFollowerInputEnvelope {

    @Field(() => [UserConnectionsCreateManyFollowerInput], {nullable:false})
    @Type(() => UserConnectionsCreateManyFollowerInput)
    data!: Array<UserConnectionsCreateManyFollowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
