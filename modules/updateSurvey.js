'use strict'
const Survey = require('./SurveyModel');

async function handleUpdateSurvey (request, response, next) {
  console.log("console log from handleupdate survey", request.body, request.params.id);
  try {
    let id = request.params.id;
    
    // await Survey.validate(pendingSurvey);
    let updateSurvey = await Survey.findByIdAndUpdate(id, request.body, {
      new: true,
      overwrite: true
    })
    console.log("update survey after await", updateSurvey);
    response.status(200).send(updateSurvey)
  }catch(error){
    next(error);
  }
}

module.exports = handleUpdateSurvey;