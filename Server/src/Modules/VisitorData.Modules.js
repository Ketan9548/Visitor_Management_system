import mongoose from 'mongoose'


const VisitorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    purposeofvisit: {
        type: String,
        required: true
    }
}, { timestamps: true })


export const VisitorModel = mongoose.model('Visitor', VisitorSchema)