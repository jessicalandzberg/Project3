const { Cohorts, Users, Students } = require('./models');
const studentsData = require('./data/studentsData');
const cohortsData = require('./data/cohortsData');
const usersData = require('./data/usersData');

const seed = async () => {
  try {
    const cohorts = await Cohorts.bulkCreate(cohortsData);
    console.log(`${cohorts.length} cohorts created!`);
    const students = await Students.bulkCreate(studentsData);
    console.log(`${students.length} students created!`);
    const users = await Users.bulkCreate(usersData);
    console.log(`${users.length} users created!`);
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

seed();
