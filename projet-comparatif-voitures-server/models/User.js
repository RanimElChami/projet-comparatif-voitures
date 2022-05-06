const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true, default: 'user' } // User or Administrator
});

module.exports = mongoose.model('User', userSchema);