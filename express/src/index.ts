import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routers/student.js';
import cors from 'cors';
const app = express()
const port = 5000;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Students")
  .then(() => {
    console.log("Connected to MongoDB");
  }) 
  .catch((err) => {
    console.error("MongoDB error:", err);
  });


app.use("/student",studentRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
 

export default app;


