import type { DefineMethods } from 'aspida';
import type { TravelSpot } from 'common/types/travelSpots';

export type Methods = DefineMethods<{
  get: {
    query: {
      spot: string;
    };
    resBody: string;
  };
  post: {
    reqBody: { destination: string };
    resBody: TravelSpot[];
  };
}>;
