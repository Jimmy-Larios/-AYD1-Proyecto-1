const userSchema = require('../mongodb/models/user.model');

// create user
const createUser =  (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// get all users
const getAllUser =  (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

module.exports = {
    createUser,
    getAllUser
};