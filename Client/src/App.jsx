import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

const baseurl = "https://student-management-system-fgfe.onrender.com";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${baseurl}/students`);
      setStudents(res.data);
    } catch (err) {
      console.error('Error fetching students:', err.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      if (editingStudent) {
        await axios.put(`${baseurl}/students/${editingStudent._id}`, data);
        setEditingStudent(null);
      } else {
        await axios.post(`${baseurl}/students`, data);
      }
      fetchStudents();
    } catch (err) {
      console.error('Error submitting student:', err.message);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${baseurl}/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error('Error deleting student:', err.message);
    }
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📘 Student Record Management</h1>
      <StudentForm onSubmit={handleFormSubmit} editingStudent={editingStudent} />
      <StudentList students={students} onDelete={deleteStudent} onEdit={editStudent} />
    </div>
  );
};

export default App;
