const bcrypt = require('bcrypt');
const user = require('../model/user');
const chat = require('../model/chat');
const pesan = require('../model/pesan');
const jwt = require('jsonwebtoken');
const moment = require('moment');

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
                        email,
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

        let isChat = await chat
            .find({
                $and: [
                    { users: { $elemMatch: { $eq: req.user._id } } },
                    { users: { $elemMatch: { $eq: userId } } },
                ],
            })
            .populate('users', '-password')
            .populate('pesanTerakhir');

        isChat = await user.populate(isChat, {
            path: 'pesanTerakhir.pengirim',
            select: 'name email pic',
        });

        if (isChat.length > 0) {
            res.json({
                chat: isChat[isChat.length - 1],
                message: 'Pesan sudah ada',
            });
        } else {
            await chat
                .create({
                    users: [req.user._id, userId],
                })
                .then((chat) => {
                    res.status(201).json({
                        chat,
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
        const { content, chatId, waktu } = req.body;
        try {
            let message = await pesan.create({
                pengirim: req.user._id,
                content,
                waktu,
                chat: chatId,
            });

            message = await message.populate(
                'pengirim',
                'name pic email waktu',
            );
            message = await message.populate('chat');

            message = await user.populate(message, {
                path: 'chat.users',
                select: 'name pic email',
            });

            await chat.findOneAndUpdate(
                { _id: chatId },
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
        if (req.query.chatId) {
            await pesan
                .find({ chat: req.query.chatId })
                .populate('pengirim', 'name pic email ')
                .populate('chat')
                .populate('chat.pesanTerakhir')
                .then((allMessage) => {
                    if (allMessage.length == 0) {
                        res.status(200).json({
                            allMessage,
                            message: 'Pesan masih kosong',
                        });
                    } else {
                        res.status(200).json({ allMessage });
                    }
                })
                .catch((err) => {
                    res.sendStatus(404);
                });
        } else {
            res.status(404).json({ message: 'Query chatId is not defined' });
        }
    }
    /**================================get all User================================ */
    static async allUser(req, res) {
        await user
            .find()
            .then((users) => {
                const user = req.user;
                res.status(200).json({ users, user });
            })
            .catch((err) => {
                res.status(404).json({ message: err.message });
            });
    }
};
