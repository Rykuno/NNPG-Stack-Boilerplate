import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserConnectionsCreateManyFollowingInput } from './user-connections-create-many-following.input';
import { Type } from 'class-transformer';

@InputType()
export class UserConnectionsCreateManyFollowingInputEnvelope {

    @Field(() => [UserConnectionsCreateManyFollowingInput], {nullable:false})
    @Type(() => UserConnectionsCreateManyFollowingInput)
    data!: Array<UserConnectionsCreateManyFollowingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
