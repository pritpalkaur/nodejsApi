'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var contractSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the contract'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('contracts', contractSchema);