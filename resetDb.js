const { db } = require('./models');

const resetDb = async () => {
  try {
    await db.sync({ force: true });
    console.log('Database has been synced!')
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

resetDb();
