import { Test, TestingModule } from '@nestjs/testing';
import { UserConnectionsResolver } from './user-connections.resolver';
import { UserConnectionsService } from './user-connections.service';

describe('UserConnectionsResolver', () => {
  let resolver: UserConnectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserConnectionsResolver, UserConnectionsService],
    }).compile();

    resolver = module.get<UserConnectionsResolver>(UserConnectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
