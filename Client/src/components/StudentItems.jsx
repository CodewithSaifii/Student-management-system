const StudentItems = ({student,OnDelete})=>{
   return(
    <>
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "8px" }}>
       <strong>{student.name}</strong> {student.email} {student.rollNumber}
       <br />
       <button onClick={()=> OnDelete(student.id)}>Delete</button>

    </div>
    </>
   )
}
export default StudentItems