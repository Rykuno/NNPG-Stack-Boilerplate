import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk/clients/all';
import { SignedResponse } from './entities/signedResponse.entity';
import { S3SignedUrlInput } from './dto/signedUrlInput.dto';
import { ConfigService } from '@nestjs/config';
import { S3Config } from 'src/common/configs/config.interface';

@Injectable()
export class UploadService {
  private readonly s3: S3;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      signatureVersion: this.configService.get<S3Config>('s3').signatureVersion,
      region: this.configService.get<S3Config>('s3').region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  getSignedUrlForGet(key: string): string {
    // TODO: use signing for everything?
    return this.configService.get<S3Config>('s3').url + key;
  }

  getSignedUrlForPut(data: S3SignedUrlInput): SignedResponse {
    const s3Params = {
      Bucket: this.configService.get<S3Config>('s3').bucket,
      Key: data.key,
      Expires: 60,
      ContentType: data.fileType,
      ACL: 'public-read',
    };
    return {
      uploadUrl: this.s3.getSignedUrl('putObject', s3Params),
      key: data.key,
      url: this.configService.get<S3Config>('s3').url,
    };
  }
}
