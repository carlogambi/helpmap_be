import { Injectable } from '@nestjs/common';
import { IPlaceSchema } from 'src/schemas/place.schema';

@Injectable()
export class PlacesService {
  test(): string {
    return 'test';
  }

  createPlace = async (place: IPlaceSchema): Promise<boolean> => {
    try {
      return true;
    } catch (err) {
      return false;
    }
  };
  updatePlace = async (place: IPlaceSchema): Promise<boolean> => {
    try {
      return true;
    } catch (err) {
      return false;
    }
  };
  deletePlace = async (placeId: string): Promise<boolean> => {
    try {
      return true;
    } catch (err) {
      return false;
    }
  };
}
