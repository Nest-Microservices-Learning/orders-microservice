import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class changeOrderStatusDto {
  @IsUUID(4)
  id: string;

  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status values are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
