"use strict";

const Survey = require("./SurveyModel");
const axios = require("axios");

async function getSurveyId (req, res, next) {
  try{
    const activeSurvey = await Survey.findOne({ active: true, subDomain: '@gmail.com' });
    res.send(activeSurvey.surveyID);
  }catch(e){
    next(e);
  }
}
module.exports = getSurveyId;