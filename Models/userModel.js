const mongoose = require('mongoose')
const validator = require('validator')
const bycrpt = require('bcrypt')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        uniquer: true,
        required: [true, 'Please enter an email'],
        lowerCase: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        min: 8,
        required: [true, 'please enter password'],
        select: false
    },
    role:{
        type:String,
        enum: ['admin', 'user'],
        default: 'user',
    }
})

UserSchema.pre('save', async function(next){
    this.password = await bycrpt.hash(this.password, 12)
    next();
})

UserSchema.methods.correctPassword= async function(candidatePassword, userPassword){
    return await bycrpt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', UserSchema)

module.exports = User