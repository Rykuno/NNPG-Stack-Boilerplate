import { InputType } from '@nestjs/graphql';

@InputType()
export class ToggleUserConnectionInput {
  followingId: string;
}
