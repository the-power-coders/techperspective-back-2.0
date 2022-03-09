'use strict'

const axios = require('axios');
const Survey = require('./SurveyModel');

async function handleCloneJotFormSurvey(request, response) {
    try {
        // const currentSurvey = 
        const templateFormID = request.query.surveyID; //ryan's form
        const url = `https://api.jotform.com/form/${templateFormID}/clone?apiKey=${process.env.JOTFORM_API}`;

        const result = await axios.post(url);

        const newSurveyData = {
            surveyID: result.data.content.id,
            surveyName: 'ryansForm',
            subDomain: '@gmail.com', 
            createdOn: String(new Date()).split(' ').splice(1, 3).join('-'),
            submissionCount: 0,
            results: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            active: true
        }

        const addedSurvey = await Survey.create(newSurveyData);
        response.status(200).send(addedSurvey);

    } catch (error) {
        response.status(400).send(error);
    }
}

module.exports = handleCloneJotFormSurvey;