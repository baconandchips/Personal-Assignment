var express = require('express');
var router = express.Router();
let Message = require('../models/message.model');

router.get('/', (req, res, next) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json({
            message: err.message,
            error: err,
        }));
});

router.route('/add').put((req, res) => { // MAKE SURE PATHS ARE SPELT RIGHT
    // console.log(req.body);
    const messageID = Number(req.body.messageID);
    const content = req.body.content;
    const contentHidden = req.body.contentHidden;
    const showHidden = Boolean(req.body.showHidden);

    const newMessage = new Message({
        messageID,
        content,
        contentHidden,
        showHidden,
    });
    console.log("newMessage: ", newMessage);

    newMessage.save()
        .then(() => res.json('Message added!'))
        .catch(err => res.status(400).json({
            message: err.message,
            error: err,
        }));
});

// Update state of hidden/visible
router.route('/update/:id').post((req, res) => {
    // console.log(req.body);
    Message.findById(req.params.id)
        .then(message => {
            message.messageID = Number(req.body.messageID);
            message.content = req.body.content;
            message.contentHidden = req.body.contentHidden;
            message.showHidden = Boolean(req.body.showHidden);

            message.save()
                .then(() => res.json('Message modified!'))
                .catch(err => res.status(400).json({
                    message: err.message,
                    error: err,
                }));
        })
        .catch(err => res.status(400).json({
            message: err.message,
            error: err,
        }));
});





module.exports = router;