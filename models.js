const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'GASei_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class Cohorts extends Sequelize.Model {}
Cohorts.init({
  name: Sequelize.STRING,
  start_date: Sequelize.STRING,
  end_date: Sequelize.STRING,
  cohort_type: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'cohorts'
});


class Students extends Sequelize.Model {}
Students.init({
  user_id: Sequelize.INTEGER,
  cohort_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  cohort_name: Sequelize.STRING,
  linkedin: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'students'
});

class Users extends Sequelize.Model {}
Users.init({
  student_id: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'users'
});

module.exports = {
  Cohorts,
  Students,
  Users,
  db,
}
