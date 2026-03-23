import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect, useState, type ChangeEvent, type Dispatch } from 'react';
import { data, type dataStudent } from '../utils/data';
import { createStudent } from '../api/students';

interface Props {
  students : dataStudent[]
    setStudents: Dispatch<React.SetStateAction<typeof data>>;
}

 
const innitialFormData = {
  fullName: "",
  age: "",
  email: "",
  class: ""
}
 
export const AddStd = (props: Props) => {

    const [formData,setformData] = useState(innitialFormData)  

    

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setformData({...formData, [e.target.name]: e.target.value});

    }



      const handleSubmit = async () => {
        try{ 
            const data = await createStudent(formData);
            props.setStudents([...props.students, data]);
            setformData(innitialFormData);
        }catch(err){
            alert(err);
        }

      }
      
      useEffect(() => {
        console.log("firing useEffect");
        if(formData.fullName === "admin"){
          alert("Welcome Admin!")
      }
    }, [formData.fullName]);

      return (
        <Box sx={{padding: 2, width:300, marginTop: 1 ,gap: 1 , display: 'flex', flexDirection: 'column'}} >
          <TextField value={formData.fullName}  onChange={handleChange} id="outlined-basic" label="fullName" name="fullName" variant="outlined"/>
          <TextField value={formData.age} onChange={handleChange} id="outlined-basic" label="age" name="age" variant="outlined" />
          <TextField value={formData.email} onChange={handleChange} id="outlined-basic" label="email" name="email" variant="outlined" />
          <TextField value={formData.class} onChange={handleChange} id="outlined-basic" label="class" name = "class" variant="outlined" />
          <button onClick={handleSubmit} style={{height: 40}}>Submit </button>
        </Box>
      );
  }

