const { Message } = require('../models/message');

module.exports = {
    
    ReceiveController(req, res) {

        res.sendStatus(200);
    },

    ReceiveSMSDate(req, res) {

        console.log(req.body);

        new Message({
            ...req.body
        }).save().then(() => res.sendStatus(200));
    }
};
