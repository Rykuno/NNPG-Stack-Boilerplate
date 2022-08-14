import { Test, TestingModule } from '@nestjs/testing';
import { UserConnectionsService } from './user-connections.service';

describe('UserConnectionsService', () => {
  let service: UserConnectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserConnectionsService],
    }).compile();

    service = module.get<UserConnectionsService>(UserConnectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
