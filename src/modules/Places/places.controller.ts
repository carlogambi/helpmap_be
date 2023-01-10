import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { IPlaceSchema } from 'src/schemas/place.schema';
import { PlacesService } from './places.service';

@Controller()
export class PlacesController {
  constructor(private readonly service: PlacesService) {}

  @Get('test')
  getHello(): string {
    return this.service.test();
  }

  @Post('')
  async createPlace(place: IPlaceSchema): Promise<boolean> {
    return await this.service.createPlace(place);
  }

  @Put('')
  async updatePlace(place: IPlaceSchema): Promise<boolean> {
    return await this.service.updatePlace(place);
  }

  @Delete('')
  async deletePlace(placeId: string): Promise<boolean> {
    return await this.service.deletePlace(placeId);
  }
}
