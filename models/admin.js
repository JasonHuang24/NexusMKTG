const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
