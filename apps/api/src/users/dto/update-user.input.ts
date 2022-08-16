import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  username?: string;
  displayName?: string;
  avatar?: string;
  banner?: string;
}
