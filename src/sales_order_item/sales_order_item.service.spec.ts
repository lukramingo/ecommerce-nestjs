import { Test, TestingModule } from '@nestjs/testing';
import { SalesOrderItemService } from './sales_order_item.service';

describe('SalesOrderItemService', () => {
  let service: SalesOrderItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesOrderItemService],
    }).compile();

    service = module.get<SalesOrderItemService>(SalesOrderItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
