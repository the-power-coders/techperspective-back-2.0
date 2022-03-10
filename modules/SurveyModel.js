"use strict";

require("dotenv").config();
const mongoose = require("mongoose");

const { Schema } = mongoose;

const surveySchema = new Schema({
  surveyID: String,
  surveyName: String,
  createdOn: String,
  submissionCount: Number,
  results: [Number],
  active: Boolean,
  subDomain: String,
  notes: String
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;

