const modelUser = require('../models/model.user');
const modelCar = require('../models/model.car');

module.exports = {
    index: async (req, res, next) => {
        const queryUser = await modelUser.find({});
        res.status(200).json(queryUser);
        /**
         * Intentar con try/cath si no se una el modulo express-promise-router
            try {
                const queryUser = await modelUser.find({});
                res.status(200).json(queryUser);
            } catch (error) {
                res.status(404).send('Sorry cant find that!');
                console.log('error', error);
            }
         */
    },
    
    newUser: async (req, res, next) => {
        const newUser = new modelUser(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await modelUser.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await modelUser.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },

    updateUser: async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await modelUser.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },

    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        const oldUser = await modelUser.findByIdAndRemove(userId);
        res.status(200).json({ success: true });
    },

    getUserCars: async (req, res, next) => {
        const { userId } = req.params;
        const user = await modelUser.findById(userId).populate('cars');
        res.status(200).json(user.cars);
    },

    newUserCar: async (req, res, next) => {
        const { userId } = req.params;
        const newCar = new modelCar(req.body);
        const user = await modelUser.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(newCar);
    }
};