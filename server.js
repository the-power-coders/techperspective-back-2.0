"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const handleGetSurveyResults = require('./modules/getSurveyResults');
const handleGetSurveyIds = require('./modules/getSurveyIds'); //TODO: add subdomain authorization
const handlePostSurveyResults = require('./modules/postSurveyResults');
const handleDeleteSurveyResults = require('./modules/deleteSurveyResults');
const handleGetUser = require('./modules/getUser');
const handleGetJotFormSurvey = require('./modules/getJotForm');
const handleCloneJotFormSurvey = require('./modules/cloneJotForm');
const handleGetActiveSurvey = require('./modules/getActiveSurvey');
const handleCreateNewSurvey = require('./modules/createNewSurvey');
const handleUpdateSurvey = require('./modules/updateSurvey');
const handleGetFormId = require('./modules/getFormId');

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.get('/test', (req, res) => {
  res.send('test request received');
});
app.get('/survey', handleGetSurveyResults);
app.get('/surveyId', handleGetSurveyIds);
app.post('/survey', handlePostSurveyResults);
app.delete('/survey/:id', handleDeleteSurveyResults);
app.get('/user', handleGetUser);
app.get('/jotform', handleGetJotFormSurvey);
app.post('/jotform', handleCloneJotFormSurvey);
app.get('/active', handleGetActiveSurvey);
app.post('/survey/create', handleCreateNewSurvey);
app.put('/survey/:id', handleUpdateSurvey);
app.get('/formId', handleGetFormId)

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
})

app.listen(PORT, () => console.log('server is listening to port ', PORT));
