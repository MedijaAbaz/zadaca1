const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  university: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true }
});

module.exports = mongoose.model('Faculty', facultySchema);
