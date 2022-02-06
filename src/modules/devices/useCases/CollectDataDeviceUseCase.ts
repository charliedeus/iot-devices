interface IDeviceProps {
  ack: boolean;
  duplicate: boolean;
  device: string;
  data: string;
  rssi: number;
  op: string;
  seqNumber: number;
  solar: number;
  modem: number;
  http: number;
  fw: number;
}

class CollectDataDeviceUseCase {
  async execute(
    ack: boolean,
    duplicate: boolean,
    device: string,
    data: string,
    rssi: number,
    op: string,
    seqNumber: number,
    solar: number,
    modem: number,
    http: number,
    fw: number,
  ): Promise<IDeviceProps> {
    const dataDevice = {
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
    };

    return dataDevice;
  }
}

export { CollectDataDeviceUseCase };
