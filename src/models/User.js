import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    active:{
        type: Boolean,
        required: true
    },
});

export default mongoose.model('User', schema);
