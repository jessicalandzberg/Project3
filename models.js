const Sequelize = require('sequelize');

const db = new Sequelize(
  (process.env.DATABASE_URL || 'postgres://localhost:5432/GASei_db'),
  {
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
  name: Sequelize.STRING,
  linkedin: Sequelize.STRING,
  hobbies: Sequelize.STRING,
  previousExperience: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'students'
});

class User extends Sequelize.Model {}
User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'users'
});

Student.belongsTo(Cohort);
Cohort.hasMany(Student);

Student.belongsTo(User);
User.hasMany(Student);

module.exports = {
  Cohort,
  Student,
  User,
  db,
}
