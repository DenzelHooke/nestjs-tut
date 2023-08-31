import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './interfaces/dto/create-item-dto';

import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param() param: { id: string }): string {
  //     return `Item ${param.id}   `;
  //   }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item | null> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createOne(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item | null> {
    return this.itemsService.deleteOne(id);
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: string,
  ): Promise<Item | null> {
    return this.itemsService.updateOne(id, updateItemDto);
  }
}
