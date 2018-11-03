const express = require('express');
const router = express.Router();
const { ReceiveController, ReceiveSMSDate } = require('../controllers/receiverController');

router.get('/', ReceiveController);

router.put('/receive', ReceiveSMSDate);

module.exports = router;