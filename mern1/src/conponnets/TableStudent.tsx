import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import type { dataStudent } from "../utils/data";
import { useEffect } from "react";

interface Props {
    Students : dataStudent[]
}


export const StudentTable = (props: Props) => {
  useEffect(() => {
    if(props.Students.length > 5){
      alert("More than 5 students added!");
    }
  }, []);


  const studentswithScholarships = props.Students.map((s) => {
    let result = false;
    for(let i = 0; i < 10000; i++){
      result = Math.random() < 0.5
    }
    return { ...s, scholarship: result };
  });

  return (
    <TableContainer component={Paper}>
      <Table size="small" sx = {{borderRadius: '8px', backgroundColor: '#0068c4ff'}}>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Class</TableCell>
            <TableCell >Scholarship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {studentswithScholarships.map((row) => {
            return (
              <TableRow key={row.email}>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.age}</TableCell>  
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.scholarship ? "Yes" : "No"}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
     
    </TableContainer>
  );
}
