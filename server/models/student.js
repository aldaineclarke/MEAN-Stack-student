const mongoose = require("../db/db");

const studentSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    form: Number,
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;