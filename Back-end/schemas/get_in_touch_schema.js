import mongoose from "mongoose"

// Get in touch schema
const getInTouchSchema = new mongoose.Schema({
    fullName: {
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
    subject: { 
        type: String,
        reqiured: true
    }, 
    text: {
        type: String,
        required: true
    }
})

const GetInTouchSchema = mongoose.model('GetInTouchSchema', getInTouchSchema)

export default GetInTouchSchema