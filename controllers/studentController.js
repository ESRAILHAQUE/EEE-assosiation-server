const Student = require("../models/studentModel");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  const { name, roll } = req.body;
  try {
    const newStudent = await Student.addStudent(name, roll);
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
