import { registerEnumType } from '@nestjs/graphql';

export enum UserConnectionsScalarFieldEnum {
    id = "id",
    followerId = "followerId",
    followingId = "followingId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserConnectionsScalarFieldEnum, { name: 'UserConnectionsScalarFieldEnum', description: undefined })
