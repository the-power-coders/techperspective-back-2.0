'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const Survey = require('./modules/SurveyModel.js');

async function seed() {
    mongoose.connect(process.env.MONGO_DB);

    
    await Survey.create ({
        surveyID: '220677085901054',
        surveyName: 'FRICK FORM',
        createdOn: '2021-12-21 12:50:47',
        submissionCount: 9,
        results: [0, 0, 0, 0, 1, 2, 0, 0, 3, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        active: false,
        subDomain: '@gmail.com',
        notes: "this is note 1"
    })
    await Survey.create ({
        surveyID: '000004',
        surveyName: 'survey 2',
        createdOn: '2021-12-19 12:03:41',
        submissionCount: 12,
        results: [0, 0, 0, 0, 1, 2, 0, 2, 3, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        active: false,
        subDomain: '@gmail.com',
        notes: "this is note 1"
    })
    await Survey.create ({
        surveyID: '000003',
        surveyName: 'survey 3',
        createdOn: '2021-12-18 11:21:32',
        submissionCount: 15,
        results: [0, 0, 0, 0, 1, 2, 0, 0, 6, 2, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        active: false,
        subDomain: '@codefellows.com',
        notes: "this is note 1"
    })
    await Survey.create ({
        surveyID: '000002',
        surveyName: 'survey 4',
        createdOn: '2021-12-17 11:01:55',
        submissionCount: 9,
        results: [1, 0, 0, 0, 0, 2, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        active: false,
        subDomain: '@codefellows.com',
        notes: "this is note 1"
    })
    await Survey.create ({
        surveyID: '000001',
        surveyName: 'survey 5',
        createdOn: '2021-12-16 10:10:10',
        submissionCount: 5,
        results: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        active: false,
        subDomain: '@codefellows.com',
        notes: "this is note 1"
    })

    mongoose.disconnect();
}

seed();