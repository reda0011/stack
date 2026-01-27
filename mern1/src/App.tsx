
import { useEffect, useState } from "react";
import {AddStd} from "./conponnets/AddStudent"
import { StudentTable } from "./conponnets/TableStudent"
import type { dataStudent } from "./utils/data";
import { fetchStudents } from "./api/students";

function App() {
  let [Students, setStudents] = useState<dataStudent[]>([]);

    

  useEffect(() => {
    fetchStudents().then((data) => 
        setStudents(data)).catch((err) => alert(err.message));

  }, []);

  return (
    <>
      <AddStd students={Students} setStudents={setStudents} />
      <StudentTable  Students={Students} />
    </>
  )
}

export default App
