import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Position, PositionSchema } from "src/schemas/position.schema";
import { PositionsController } from "./positions.controller";
import { PositionService } from "./positions.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Position.name, schema: PositionSchema },
    ]),
  ],
  controllers: [PositionsController],
  providers: [PositionService],
})
export class PositionsModule {}
