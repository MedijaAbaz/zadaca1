const mongoose = require('mongoose');
const faker = require('faker');
const University = require('./models/University');

mongoose.connect('mongodb://127.0.0.1:27017/universityDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');
  await University.deleteMany({});
  for (let i = 0; i < 5; i++) {
    const university = new University({
      name: faker.company.companyName(),
      address: faker.address.streetAddress()
    });
    await university.save();
  }
  console.log('Sample universities added');
  process.exit();
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
