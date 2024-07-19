import { travelSpotUseCase } from 'domain/travelSpot/useCase/travelSpotUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: ({ query }) => ({ status: 200, body: travelSpotUseCase.pa(query.spot) }),
  post: async ({ body }) => ({
    status: 201,
    body: await travelSpotUseCase.fetchTravelSpots(body.destination),
  }),
}));
