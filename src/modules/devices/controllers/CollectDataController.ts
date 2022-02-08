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
        ack as string,
        duplicate as string,
        device as string,
        data as string,
        rssi as string,
        op as string,
        seqNumber as string,
        solar as string,
        modem as string,
        http as string,
        fw as string,
      );

      return response.json(result);
    } catch (error) {
      return response.json(error.message);
    }
  }
}

export { CollectDataDeviceController };
