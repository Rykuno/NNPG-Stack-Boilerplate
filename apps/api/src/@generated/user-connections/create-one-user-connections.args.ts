import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsCreateInput } from './user-connections-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserConnectionsArgs {

    @Field(() => UserConnectionsCreateInput, {nullable:false})
    @Type(() => UserConnectionsCreateInput)
    data!: UserConnectionsCreateInput;
}
