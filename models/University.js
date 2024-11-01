const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  faculties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }]
});

module.exports = mongoose.model('University', universitySchema);
