import { Module } from '@nestjs/common';
import { UploadResolver } from './upload.resolver';
import { UploadService } from './upload.service';

@Module({
  providers: [UploadService, UploadResolver],
  exports: [UploadService],
})
export class UploadModule {}
