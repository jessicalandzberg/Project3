const { Cohort, User, Student } = require('./models');

const seed = async () => {
  try {
    const student1= await Student.create({
      user_id: 1,
      name: 'Joshua Dyer',
      linkedin: 'linkedin.com/josh'
    })

    const student2= await Student.create({
      user_id: 2,
      name: 'JC',
      linkedin: 'linkedin.com/jc'
    })

    const cohort1= await Cohort.create({
      name: 'Pirates',
      start_date: 'July 2019',
      end_date: 'October 2019',
      cohort_type: "SEI"
    })

    const cohort2= await Cohort.create({
      name: 'Cohort 2',
      start_date: 'July 2019',
      end_date: 'October 2019',
      cohort_type: "SEI"
    })

    const cohort3= await Cohort.create({
      name: 'Cohort 3',
      start_date: 'July 2019',
      end_date: 'October 2019',
      cohort_type: "SEI"
    })

    await cohort1.addStudent(student1);
    await cohort1.addStudent(student2);

  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

seed();
