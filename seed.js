const { Cohort, User, Student } = require('./models');

const seed = async () => {
  try {
    const student1= await Student.create({
      name: 'Aaron Kim',
      linkedin: 'https://www.linkedin.com/in/aaronkim662/',
    })

    const student2= await Student.create({
      name: 'Andre Williams',
      linkedin: 'https://www.linkedin.com/in/andre-williams-37272118b/'
    })

    const student3= await Student.create({
      name: 'Andrew Hollingworth',
      linkedin: 'https://www.linkedin.com/in/andrew-hollingworth/'
    })

    const student4= await Student.create({
      name: 'Eloise Barrow',
      linkedin: 'https://www.linkedin.com/in/eloisebarrow/'
    })

   const student5= await Student.create({
      name: 'Jad Izzedin',
      linkedin: 'https://www.linkedin.com/in/jad-izzedin-37172118b/'
    })

    const student6= await Student.create({
      name: 'Jessica Landzberg',
      linkedin: 'https://www.linkedin.com/in/jessicalandzberg/'
    })

    const student7= await Student.create({
      name: 'Joshua Dyer',
      linkedin: 'https://www.linkedin.com/in/joshua-dyer-a629a190/'
    })

    const student8= await Student.create({
      name: 'Marie-France Han',
      linkedin: 'https://www.linkedin.com/in/mariefr/'
    })
   const student9= await Student.create({
      name: 'Tommy Liang',
      linkedin: 'https://www.linkedin.com/in/mrtommyliang/'
    })

    const student10= await Student.create({
      name: 'AJ Jernigan',
      linkedin: 'https://www.linkedin.com/in/aj-jernigan/'
    })

    const student11= await Student.create({
      name: 'Darrin James Im',
      linkedin: 'https://www.linkedin.com/in/darrin-im/'
    })

    const student12= await Student.create({
      name: 'J.C. Dorr',
      linkedin: 'https://www.linkedin.com/in/john-dorr/'
    })

    const cohort1= await Cohort.create({
      name: 'Pirates',
      start_date: 'July 2019',
      end_date: 'October 2019',
      cohort_type: "SEI"
    })

    const cohort2= await Cohort.create({
      name: 'Dinosaurs',
      start_date: 'September 2019',
      end_date: 'December 2019',
      cohort_type: "SEI"
    })

    const cohort3= await Cohort.create({
      name: 'Oasis',
      start_date: 'August 2019',
      end_date: 'November 2019',
      cohort_type: "SEI"
    })

    await cohort1.addStudent(student1);
    await cohort1.addStudent(student2);
    await cohort1.addStudent(student3);
    await cohort1.addStudent(student4);
    await cohort1.addStudent(student5);
    await cohort1.addStudent(student6);
    await cohort1.addStudent(student7);
    await cohort1.addStudent(student8);
    await cohort1.addStudent(student9);
    await cohort1.addStudent(student10);
    await cohort1.addStudent(student11);
    await cohort1.addStudent(student12);

  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

seed();
