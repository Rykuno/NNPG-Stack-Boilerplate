import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';
import { Type } from 'class-transformer';
import { UserConnectionsCreateInput } from './user-connections-create.input';
import { UserConnectionsUpdateInput } from './user-connections-update.input';

@ArgsType()
export class UpsertOneUserConnectionsArgs {

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;

    @Field(() => UserConnectionsCreateInput, {nullable:false})
    @Type(() => UserConnectionsCreateInput)
    create!: UserConnectionsCreateInput;

    @Field(() => UserConnectionsUpdateInput, {nullable:false})
    @Type(() => UserConnectionsUpdateInput)
    update!: UserConnectionsUpdateInput;
}
