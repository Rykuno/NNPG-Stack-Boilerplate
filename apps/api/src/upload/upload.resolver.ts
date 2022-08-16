import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { SignedResponse } from './entities/signedResponse.entity';
import { Upload } from './entities/upload.entity';
import { UploadService } from './upload.service';
import { nanoid } from 'nanoid';

@Resolver(() => Upload)
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Mutation(() => SignedResponse)
  @UseGuards(GqlAuthGuard)
  upload(@Args('fileType') fileType: string) {
    return this.uploadService.getSignedUrlForPut({
      fileType,
      key: nanoid(),
    });
  }
}
