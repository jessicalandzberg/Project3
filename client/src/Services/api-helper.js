const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

export const showCohorts = async () => {
  try {
    const cohorts = await axios.get(`${BASE_URL}/cohorts`);
    return cohorts.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const showStudents = async (cohort_id) => {
  try {
    const students = await axios.get(`${BASE_URL}/cohorts/${cohort_id}`);
    console.log(students.data);
    return students.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const createStudent = async (data, cohort_id) => {
  try {
    const student = await axios.post(`${BASE_URL}/cohorts/${cohort_id}`, data);
    console.log(student.data);
    return student.data;
  } catch (e) {
    console.log(e.message);
  }
};


export const updateStudent = async (data, id) => {
  try {
    const student = await axios.put(`${BASE_URL}/cohorts/${id}`, data);
    console.log(student.data);
    return student.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const destroyStudent = async (id) => {
  try {
    const student = await axios.delete(`${BASE_URL}/cohorts/${id}`);
    console.log(student.data);
    return student.data;
  } catch (e) {
    console.log(e.message);
  }
};
