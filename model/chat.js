const mongoose = require('mongoose');

const chat = mongoose.model(
    'chat',
    mongoose.Schema(
        {
            users: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'user',
                },
            ],
            pesanTerakhir: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'pesan',
            },
        },
        {
            timestamps: true,
        },
    ),
);

module.exports = chat;
