import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  try {
    const { name, email, rollNumber, course, batch, phone } = req.body;

    if (!name || !email || !rollNumber || !course || !batch || !phone) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const existing = await Student.findOne({ email });
    if (existing) {
      return res
        .status(409)
        .json({ message: "Student with this email already exists" });
    }

    const student = new Student({ name, email, rollNumber, course, batch, phone });
    await student.save();

    res.status(200).json({ message: "Record created successfully!", student });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getallStudent = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getStudentid = async (req, res) => {
  try {
    const studentById = await Student.findById(req.params.id);
    if (!studentById) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.json(studentById);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.json({ message: "Student updated", updatedStudent });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
    console.log("Received DELETE request for ID:", req.params.id); // ✅ Add this

  try {
    const delstd = await Student.findByIdAndDelete(req.params.id);
    if (!delstd) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.json({ message: "Student deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
