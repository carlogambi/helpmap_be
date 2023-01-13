import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { IPositionSchema, Position } from "src/schemas/position.schema";
import { PositionService } from "./positions.service";

@Controller("positions")
export class PositionsController {
  constructor(private readonly service: PositionService) {}

  @Get("")
  async getHello(
    @Query("id") id?: string,
    @Query("category") category?: string
  ): Promise<Position[]> {
    return await this.service.list(id, category);
  }

  @Post("")
  async create(@Body() place: IPositionSchema): Promise<boolean> {
    return await this.service.create(place);
  }

  @Put("")
  async update(
    @Body() place: IPositionSchema,
    @Query("id") id: string
  ): Promise<boolean> {
    return await this.service.update(id, place);
  }

  @Delete("")
  async delete(@Query("id") placeId: string): Promise<boolean> {
    return await this.service.delete(placeId);
  }
}
