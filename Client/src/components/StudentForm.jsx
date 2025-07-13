import { useEffect, useState } from "react";

const StudentForm = ({ onSubmit, editingStudent }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rollNumber: '',
    course: '',
    batch: '',
    phone: ''
  });

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent);
    } else {
      setForm({
        name: '',
        email: '',
        rollNumber: '',
        course: '',
        batch: '',
        phone: ''
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      email: '',
      rollNumber: '',
      course: '',
      batch: '',
      phone: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingStudent ? " Update Student" : "Add Student"}</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "5px"
          }}
        />
      ))}
      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
