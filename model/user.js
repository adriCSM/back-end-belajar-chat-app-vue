const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = mongoose.model(
    'user',
    mongoose
        .Schema(
            {
                name: { type: String, required: true },
                email: { type: String, required: true },
                password: { type: String, required: true },
                pic: {
                    type: String,
                    required: true,
                    default:
                        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                },
            },
            {
                timestamps: true,
            },
        )
        .pre('insertMany', async (next, data) => {
            if (data) {
                const salt = await bcrypt.genSalt(10);
                data.password = await bcrypt.hash(data.password, salt);
            }
            next();
        }),
);

module.exports = user;
