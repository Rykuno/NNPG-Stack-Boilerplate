import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsCreateManyInput } from './user-connections-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserConnectionsArgs {

    @Field(() => [UserConnectionsCreateManyInput], {nullable:false})
    @Type(() => UserConnectionsCreateManyInput)
    data!: Array<UserConnectionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
