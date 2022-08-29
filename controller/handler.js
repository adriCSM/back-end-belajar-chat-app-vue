const bcrypt = require('bcrypt');
const user = require('../model/user');
const chat = require('../model/chat');
const pesan = require('../model/pesan');
const jwt = require('jsonwebtoken');
const { create, find } = require('../model/user');

module.exports = class handler {
    /**================================registrase================================ */
    static async Registrasi(req, res) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: 'field masih kosong' });
        }

        const cekUser = await user.findOne({ email });

        if (cekUser) {
            res.status(400).json({ message: 'Email sudah digunakan' });
        } else {
            await user
                .insertMany({
                    name,
                    email,
                    password,
                })
                .then((data) => {
                    res.status(201).json({
                        message: 'Register Successfully',
                    });
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
    }

    /**================================Login================================ */
    static async Login(req, res) {
        const { email, password } = req.body;

        await user
            .findOne({ email })
            .then(async (data) => {
                const cekPassword = await bcrypt.compare(
                    password,
                    data.password,
                );

                if (cekPassword) {
                    const { _id, name, email } = data;
                    const token = jwt.sign(
                        { _id, name, email },
                        process.env.ACCESS_KEY,
                        {
                            expiresIn: '1d',
                        },
                    );
                    res.status(200).json({
                        message: 'Login Successfully',
                        token,
                    });
                } else {
                    res.status(400).json({ message: 'password salah' });
                }
            })
            .catch(() => {
                res.status(404).json({ message: 'Email belum terdaftar' });
            });
    }

    /**================================Creat chat================================ */
    static async Chat(req, res) {
        const { userId } = req.body;
        console.log(userId);

        let isChat = await chat
            .find({ users: [req.user._id, userId] })
            .populate('users', '-password')
            .populate('pesanTerakhir');

        isChat = await user.populate(isChat, {
            path: 'pesanTerakhir.pengirim',
            select: 'name email pic',
        });

        if (isChat.length > 0) {
            res.json(isChat[isChat.length - 1]);
        } else {
            await chat
                .create({
                    users: [req.user._id, userId],
                })
                .then(() => {
                    res.status(201).json({
                        message: 'Create chat Successfully',
                    });
                })
                .catch((err) => {
                    res.sendStatus(400);
                });
        }
    }

    /**================================kirim pesan================================ */
    static async sendPesan(req, res) {
        const { content, chatId } = req.body;
        try {
            let message = await pesan.create({
                pengirim: req.user._id,
                content,
                chat: chatId,
            });

            message = await message.populate('pengirim', 'name pic');
            message = await message.populate('chat');

            message = await user.populate(message, {
                path: 'chat.users',
                select: 'name pic email',
            });

            await chat.findOneAndUpdate(
                chatId,
                {
                    $set: {
                        pesanTerakhir: message,
                    },
                },
                {
                    new: true,
                },
            );

            res.status(201).json(message);
        } catch (err) {
            res.status(401).json(err.message);
        }
    }

    /**================================get all pesan================================ */

    static async allPesan(req, res) {
        await pesan
            .find({ chat: req.query.chatId })
            .populate('pengirim', 'name pic email')
            .populate('chat')
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }
};
