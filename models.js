const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'GASei_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class Cohort extends Sequelize.Model {}
Cohort.init({
  name: Sequelize.STRING,
  start_date: Sequelize.STRING,
  end_date: Sequelize.STRING,
  cohort_type: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'cohorts'
});


class Student extends Sequelize.Model {}
Student.init({
  user_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  linkedin: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'students'
});

class User extends Sequelize.Model {}
User.init({
  student_id: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'users'
});

Student.belongsTo(Cohort);
Cohort.hasMany(Student);

module.exports = {
  Cohort,
  Student,
  User,
  db,
}
