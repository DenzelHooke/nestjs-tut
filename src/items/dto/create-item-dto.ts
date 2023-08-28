import { Body } from '@nestjs/common';

export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly qty: number;
}
