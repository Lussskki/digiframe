import mongoose from "mongoose"

// User schema for mongodb 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        validate: {
            validator: function (v) {
                // regex to check if contains "@"
                 return /^.+@.+\..+$/.test(v)
            },
            message: props => `${props.value} is not valid email! Email must contain "@"`
        }
    },
    password: {
        type: String,
        required: true
    },
    // Not working
    // emailServicePassword: { // Field to reset a forgotten password
    //   type: String,
    //   select: false,
    //   required: true
    // }
})

const UserSchema= mongoose.model('UserSchema', userSchema)
 
export default UserSchema