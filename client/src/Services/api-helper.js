const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

export const registerUser = async (resgisterData) => {
  const resp = await axios.post(`${BASE_URL}/auth/register`, resgisterData);
  return resp.data;
}

export const loginUser = async (loginData) => {
  const resp = await axios.post(`${BASE_URL}/auth/login`, loginData);
  return resp.data
}

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
    return students.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const showStudent = async (student_id) => {
  try {
    const student = await axios.get(`${BASE_URL}/cohorts/students/${student_id}`);
    return student.data;
  } catch (e) {
    console.log(e.message);
  }
};


export const createStudent = async (data, cohort_id, user_id) => {
  try {
    const student = await axios.post(`${BASE_URL}/cohorts/${cohort_id}/${user_id}`, data);
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
