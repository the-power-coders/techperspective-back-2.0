'use strict'

const axios = require('axios');
const Survey = require('./SurveyModel');

async function postSurvey (request, response, next) {
  try {
    let createdSurvey = await Survey.create({
        surveyID: request.query.surveyID,
        surveyName: request.query.surveyName,
        createdOn: String(new Date()).split(' ').splice(1, 3).join('-'),
        submissionCount: 0,
        results: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        active: false,
        subDomain: request.query.subDomain
    })
    response.status(200).send(createdSurvey);
  } catch (error) {
    next (error);
  }
}

module.exports = postSurvey;
