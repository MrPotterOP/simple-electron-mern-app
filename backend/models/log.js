import mongoose from "mongoose";


var d = new Date();


const logSchema = new mongoose.Schema({
    user: {type: String, require: true},
    userAgent: {type: String, require: true},
    time: {type: String, default: d.toUTCString()}
});

const log = new mongoose.model("log", logSchema);

export default log;