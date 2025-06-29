
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  phone: {
    type: String,
  },
}, {
  timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
