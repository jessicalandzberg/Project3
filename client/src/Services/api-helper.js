// const axios = require('axios');

// const BASE_URL = 'http://localhost:3001';

// export const showStudents = async () => {
//   try {
//     const students = await axios.get(`${BASE_URL}/cohorts`);
//     console.log(students.data);
//     return students.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const createStudent = async (data) => {
//   try {
//     const cohort_id = 
//     const student = await axios.post(`${BASE_URL}/cohorts/${cohort_id}`, data);
//     console.log(student.data);
//     return student.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const updateStudent = async (data, id) => {
//   try {
//     const student = await axios.put(`${BASE_URL}/cohorts/${id}`, data);
//     console.log(student.data);
//     return student.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const destroyStudent = async (id) => {
//   try {
//     const student = await axios.delete(`${BASE_URL}/cohorts/${id}`);
//     console.log(student.data);
//     return student.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };
