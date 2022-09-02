const mongoose = require('mongoose');

const pesan = mongoose.model(
    'pesan',
    mongoose.Schema(
        {
            pengirim: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
            content: {
                type: String,
                trim: true,
            },
            chat: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'chat',
            },
            waktu: {
                type: String,
                required: true,
            },
        },
        {
            timestamps: true,
        },
    ),
);

module.exports = pesan;
