import StudentItems from './StudentItems';
import './List.css';

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <div className="student-list">
      <h2 className="list-heading">📃 Student List</h2>
      {students.length === 0 ? (
        <p className="no-students">No students found.</p>
      ) : (
        students.map((student) => (
          <StudentItems
            key={student._id}
            student={student}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default StudentList;
