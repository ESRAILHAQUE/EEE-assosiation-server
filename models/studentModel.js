const db = require("../config/db");

// Get all students
exports.getAllStudents = async () => {
  const res = await db.query("SELECT * FROM students");
  return res.rows;
};

// Add student
exports.addStudent = async (name, roll) => {
  const res = await db.query(
    "INSERT INTO students (name, roll) VALUES ($1, $2) RETURNING *",
    [name, roll]
  );
  return res.rows[0];
};
