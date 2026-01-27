import express from 'express';
import mongoose from 'mongoose';
import { studentModel } from '../moduls/student.js';


const router = express.Router();


router.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Students')
  .then(() => console.log('Connected!'));


router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).send(students);
  } catch{
    res.status(500).send("Error retrieving students");
  }
  

});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const student = await studentModel.findById(id);
  if (!student) {
    res.status(404).send({ message: "Student not found" });
  }
  res.status(200).send(student);
});

router.post("/", async (req, res) => {

  try{ 
      const data = req.body;
      console.log({ data });
      const newstudent = await studentModel.create(data);
      newstudent.save();
      res.status(201).send(newstudent);
  } catch(err :any){
        res.status(500).send(err.message);
  }


});

router.put("/:id",async (req ,res )=>{
  const id = req.params.id;
  const data = req.body; 
  const updatestudent = await studentModel.findByIdAndUpdate(id , data , {new : true}); 
  
if(!updatestudent)
{
  return res.status(404).send({message : "Student not found"});
}
  res.status(204).send(updatestudent);
})



router.delete("/:id",async (req ,res)=>{
  const id = req.params.id;
  const deletestudent = await studentModel.findByIdAndDelete(id);
  if(!deletestudent)
  {
    return res.status(404).send({message : "Student not found"});
  }
  res.send("Okay");
})

export default router;


