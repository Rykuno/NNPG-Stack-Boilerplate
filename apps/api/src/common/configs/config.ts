import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 4000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'api',
    description: 'Poptaro API',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '14m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  s3: {
    signatureVersion: 'v4',
    url: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/`,
    bucket: process.env.AWS_S3_BUCKET,
    region: 'us-west-2',
  },
};

export default (): Config => config;
