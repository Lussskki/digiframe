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
    notifications: {
        emailAlerts: { type: Boolean, default: false },  
        pushNotifications: { type: Boolean, default: false },
        weeklySummary: { type: Boolean, default: false },
        securityAlerts: { type: Boolean, default: false },
        receivePromotionalEmails: { type: Boolean, default: false } 
    }
    }, { timestamps: true },

)

const UserSchema= mongoose.model('UserSchema', userSchema)
 
export default UserSchema