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
        } else if (name.length < 4) {
            res.status(400).json({ message: 'Username minimal 4 karakter' });
        } else if (password.length < 8) {
            res.status(400).json({ message: 'Password minimal 8 karakter' });
        } else {
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
    }

    /**================================Log out================================ */
    static async Logout(req, res) {
        const { id } = req.query;

        await user
            .findOneAndUpdate(
                { _id: id },
                {
                    $set: {
                        status: 'Offline',
                    },
                },
            )
            .then(() => {
                res.status(200).json({ message: 'Log Out success' });
            })
            .catch(() => {
                res.status(404).json({ message: 'Log Out failed' });
            });
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
                    await user.findOneAndUpdate(
                        { _id },
                        {
                            $set: {
                                status: 'Online',
                            },
                        },
                    );
                    res.status(200).json({
                        message: 'Login Successfully',
                        token,
                        _id,
                    });
                } else {
                    res.status(400).json({ message: 'Invalid password' });
                }
            })
            .catch(() => {
                res.status(404).json({ message: 'Email not found' });
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
        const { content, chatId } = req.body;
        try {
            let message = await pesan.create({
                pengirim: req.user._id,
                content,
                waktu: moment(new Date()).locale('id').format('HH:mm'),
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
            .then(async (users) => {
                const user = req.user;

                res.status(200).json({ users, user });
            })
            .catch((err) => {
                res.status(404).json({ message: err.message });
            });
    }
    /**================================Delete akun================================ */

    static async deleteAkun(req, res) {
        const { id } = req.query;

        await user
            .findOneAndDelete({ _id: id })
            .then(() => {
                res.status(200).json({
                    message: 'Delete account successfully',
                });
            })
            .catch((err) => {
                res.status(400).json({ message: 'Delete account Failed' });
            });
    }
};
