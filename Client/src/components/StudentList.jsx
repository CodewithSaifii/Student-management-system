import StudentItem from './StudentItems';

const StudentList = ({ students, onDelete }) => {
  return (
    <div>
      <h2>📃 Student List</h2>
      {students.map(student => (
        <StudentItem key={student._id} student={student} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default StudentList;
