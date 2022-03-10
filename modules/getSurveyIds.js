"use strict";

const Survey = require("./SurveyModel");

const axios = require("axios");

async function getIds(request, response, next) {
  try {
    let data = await Survey.find();
    let surveyIds = data.map((survey) => {
      return new SurveyId(survey);
    });
    response.status(200).send(surveyIds);
  } catch (error) {
    next(error);
  }
}

class SurveyId {
  constructor(survey) {
    this.surveyName = survey.surveyName;
    this.surveyID = survey.surveyID;
    this.notes = survey.notes;
    this.subDomain = survey.subDomain;
  }
}

module.exports = getIds;
