import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserConnectionsUpdateInput } from './user-connections-update.input';
import { Type } from 'class-transformer';
import { UserConnectionsWhereUniqueInput } from './user-connections-where-unique.input';

@ArgsType()
export class UpdateOneUserConnectionsArgs {

    @Field(() => UserConnectionsUpdateInput, {nullable:false})
    @Type(() => UserConnectionsUpdateInput)
    data!: UserConnectionsUpdateInput;

    @Field(() => UserConnectionsWhereUniqueInput, {nullable:false})
    @Type(() => UserConnectionsWhereUniqueInput)
    where!: UserConnectionsWhereUniqueInput;
}
