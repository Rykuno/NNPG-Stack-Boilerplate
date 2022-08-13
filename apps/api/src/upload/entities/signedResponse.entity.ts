import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SignedResponse {
  @Field()
  uploadUrl: string;

  @Field()
  url: string;

  @Field()
  key: string;
}
