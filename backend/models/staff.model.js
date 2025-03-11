import mongoose from "mongoose";

const staffModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Staff", staffModel, "staff")