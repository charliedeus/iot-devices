import { Router } from 'express';

import { CollectDataDeviceController } from './modules/devices/controllers/CollectDataController';

const router = Router();

const collectDataDeviceController = new CollectDataDeviceController();

router.get('/collectdata', collectDataDeviceController.handle);

export { router };
