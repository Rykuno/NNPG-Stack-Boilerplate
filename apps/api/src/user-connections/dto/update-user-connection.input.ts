import { ToggleUserConnectionInput } from './toggle-user-connection.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserConnectionInput extends PartialType(
  ToggleUserConnectionInput,
) {
  @Field(() => Int)
  id: number;
}
