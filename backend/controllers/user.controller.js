const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const utils = require("../utils");
const bcrypt = require('bcryptjs')

//CREATE AND SAVE USER 

exports.create = (req, res) => {
    if (!req.body.password || !req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


//CREATE USER

let user = {
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    codigoPostal: req.body.codigoPostal,
    rol: req.body.rol ? req.body.rol : 'user'
};

//GET ONE

User.findOne({ where: { email: user.email }})
.then(data => {
    if (data) {
        const result = bcrypt.compareSync(user.password, data.password);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);

        const userObj = utils.getCleanUser(data);

        return res.json({ user: userObj, acces_token: token})
    }

    user.password = bcrypt.hashSync(req.body.password);

    //USER NOT FOUND
    User.create(user)
    .then(data => {
         const token = utils.generateToken(data);

         const userObj = utils.getCleanUser(data);

         return res.json({ user: userObj, access_token: token});
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating User"
        });
    });
})
}