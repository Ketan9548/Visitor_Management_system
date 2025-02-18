import mongoose from 'mongoose';


const AdminuserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const AdminuserModel = mongoose.model('Adminuser', AdminuserSchema);