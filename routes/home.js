const path = require('path');

const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');

router.get('/getEmployer/:employerId', homeController.getEmployer);

router.get('/getEmployers', homeController.getEmployers);

router.use('/postEmployer/:employerId', homeController.postEmployer)

router.get('/delEmployer/:employerId', homeController.getDelEmployer)

router.get('/Home', homeController.getHomePage);

router.get('/', homeController.getHomePage);

module.exports = router;