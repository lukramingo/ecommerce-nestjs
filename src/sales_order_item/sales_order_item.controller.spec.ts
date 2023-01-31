import { Test, TestingModule } from '@nestjs/testing';
import { SalesOrderItemController } from './sales_order_item.controller';
import { SalesOrderItemService } from './sales_order_item.service';

describe('SalesOrderItemController', () => {
  let controller: SalesOrderItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesOrderItemController],
      providers: [SalesOrderItemService],
    }).compile();

    controller = module.get<SalesOrderItemController>(SalesOrderItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
