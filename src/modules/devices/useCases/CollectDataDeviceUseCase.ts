interface IDeviceProps {
  ack: string;
  duplicate: string;
  device: string;
  data: string;
  rssi: string;
  op: string;
  seqNumber: string;
  solar: string;
  modem: string;
  http: string;
  fw: string;
}

class CollectDataDeviceUseCase {
  async execute(
    ack: string,
    duplicate: string,
    device: string,
    data: string,
    rssi: string,
    op: string,
    seqNumber: string,
    solar: string,
    modem: string,
    http: string,
    fw: string,
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
