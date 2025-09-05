import mongoose from "mongoose";
import { type } from "os";
import { email } from "zod";
import { required } from "zod/mini";

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },

    phoneNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    alternatePhoneNumber: {
        type: String,
        trim: true,
        required: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    alternateEmail: {
        type: String,
        required: false,
    },

    status: {
        type: String,
        enum: [ "New", "Qualified", "Follow-Up", "Converted" ],
        required: true
    },

    qualification: {
        type: String,
        enum: [ "Masters", "PhD", "High School", "Bachelors", "Others" ],
        required: true
    },

    interestedField: {
        type: String,
        enum: ["Web Development", "Data Science", "Digital Marketing", "Mobile Development"],
        required: true
    },

    source: {
        type: String,
        enum: ["Email Campaign", "Website", "Cold Call", "Social Media"],
        required: true
    },

    assignedTo: {
        type: String,
        enum: ["John Doe", "Jane Smith", "Emily Davis", "Robert Johnson"],
        required: true
    },

    jobInterest: {
        type: String,
        enum: ["Web Development", "Data Science", "Digital Marketing", "Mobile Development"],
        required: true
    },

    state: {
        type: String,
        trim: true,
        required: true
    },

    city: {
        type: String,
        trim: true,
        required: true
    },

    passOutYear: {
        type: String,
        required: true
    },

    heardFrom: {
        type: String,
        trim: true,
        required: true
    },

    updateDate: {
        type: Date,
        default: Date.now
    }

});

export default leadSchema;