import { Request, Response } from 'express';

import { CollectDataDeviceUseCase } from '../useCases/CollectDataDeviceUseCase';

class CollectDataDeviceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      ack,
      duplicate,
      device,
      data,
      rssi,
      op,
      seqNumber,
      solar,
      modem,
      http,
      fw,
    } = request.query;

    // return response.json(request.query);

    const collectDataDeviseUseCase = new CollectDataDeviceUseCase();

    try {
      const result = await collectDataDeviseUseCase.execute(
        ack,
        duplicate,
        device,
        data,
        rssi,
        op,
        seqNumber,
        solar,
        modem,
        http,
        fw,
      );

      return response.json(result);
    } catch (error) {
      return response.json(error.message);
    }
  }
}

export { CollectDataDeviceController };
