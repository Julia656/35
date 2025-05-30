import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

export default mongoose.model('Task', taskSchema);