import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  // private readonly items: Item[] = [
  //   {
  //     id: '318491249',
  //     name: 'Iphone 15',
  //     description: 'Pro phone',
  //     qty: 32,
  //   },
  //   {
  //     id: '2858255',
  //     name: 'Iphone 14',
  //     description: 'Pro phone',
  //     qty: 12,
  //   },
  //   {
  //     id: '5492440',
  //     name: 'Iphone 13',
  //     description: 'Pro phone',
  //     qty: 32,
  //   },
  // ];

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item | null> {
    return await this.itemModel.findOne({ _id: id });
  }

  async createOne(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async deleteOne(id: string): Promise<Item | null> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async updateOne(id: string, item: Item): Promise<Item | null> {
    return await this.itemModel.findByIdAndUpdate(id, item, {
      new: true,
    });
  }
}
