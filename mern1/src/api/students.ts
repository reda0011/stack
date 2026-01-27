import type { dataStudent } from "../utils/data";

const API_URL = 'http://localhost:5000/student';

export const fetchStudents = async () => {
    try {
        const response = await fetch(API_URL);
        if(!response.ok) {
            throw  new Error(`${response.statusText} : ${response.status}`);
        }
        return await response.json();
    } catch (Error) {
        throw Error;
    }
}



export const createStudent = async (data:dataStudent) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) {
            throw  new Error(`${response.statusText} : ${response.status}`);
        }
        return await response.json();

    } catch (Error) {
        throw Error;
    }

    
}