const StudentItems = ({ student, onDelete, onEdit }) => {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Roll No:</strong> {student.rollNumber}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Batch:</strong> {student.batch}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
      </div>

      <div className="student-actions">
        <button className="delete-btn" onClick={() => onDelete(student._id)}>🗑️ Delete</button>
        <button className="edit-btn" onClick={() => onEdit(student)}>✏️ Edit</button>
      </div>
    </div>
  );
};

export default StudentItems;
