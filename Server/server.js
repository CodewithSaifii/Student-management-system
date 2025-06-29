import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import studentRoutes from './routes/studentsRoutes.js'


dotenv.config()

const app = express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/api/students",studentRoutes)

app.get("/", (req, res) => {
  res.send("Student Record API is running...");
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB connected");
    app.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));