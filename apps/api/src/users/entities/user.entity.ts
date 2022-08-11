import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'src/common/entities/base.entity';

@ObjectType()
export class User extends BaseEntity {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  username: string;

  @Field()
  usernameId: string;

  @Field()
  avatar?: string;

  displayName: string;

  @HideField()
  password: string;
}
