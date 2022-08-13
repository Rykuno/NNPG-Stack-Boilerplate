import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class S3SignedUrlInput {
  @Field()
  key: string;

  @Field()
  fileType: string;
}
