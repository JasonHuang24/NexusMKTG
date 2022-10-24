const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Adding database model for my editting
const editWebsiteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  pageTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  builtIn: {
    type: String,
    required: true
  },
  caseStudy: {
    type: String,
    required: true
  }
}, {timestamps: true})

const EditAdmin = mongoose.model('EditAdmin', editWebsiteSchema);
module.exports = EditAdmin;
