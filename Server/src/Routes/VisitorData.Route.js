import express from 'express';
import { VisitorModel } from '../Modules/VisitorData.Modules.js';

const VisitorRoutes = express.Router();

VisitorRoutes.post('/add-visitor', async (req, res) => {
    let { fullname, email, mobile, date, time, purposeofvisit } = req.body;
    try {
        if (!fullname || !email || !mobile || !date || !time) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newVisitor = new VisitorModel({ fullname, email, mobile, date, time, purposeofvisit });
        await newVisitor.save();
        res.status(201).json({ message: 'Visitor added successfully' });
    } catch (error) {
        res.status(400).json({ message: "Error in the adding Visitor data in the database: ", error: error.message });
    }
})

VisitorRoutes.get('/get-visitors', async (req, res) => {
    try {
        const allVisitors = await VisitorModel.find();
        res.status(200).json(allVisitors);
    } catch (error) {
        res.status(400).json({ message: "Error in getting all visitors from the database: ", error: error.message });
    }
})

VisitorRoutes.put('/check-in/:id', async (req, res) => {
    let { id } = req.params;
    let { completed } = req.body;
    try {
        const updatedVisitor = await VisitorModel.findByIdAndUpdate(id, { completed: true }, { new: true });
        if (!updatedVisitor) {
            return res.status(404).json({ message: "Visitor not found" });
        }
        res.status(200).json({ message: 'Visitor checked in successfully' });
    } catch (error) {
        res.status(400).json({ message: "Error in checking in the visitor: ", error: error.message });
    }
})

VisitorRoutes.delete('/delete/:id', async (req, res) => {
    let { id } = req.params;
    try {
        const deletedVisitor = await VisitorModel.findByIdAndDelete(id);
        if (!deletedVisitor) {
            return res.status(404).json({ message: "Visitor not found" });
        }
        res.status(200).json({ message: 'Visitor deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: "Error in deleting the visitor: ", error: error.message });
    }
})

export default VisitorRoutes;