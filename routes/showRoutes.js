const express = require('express')
const router = express.Router()

//controller
const mainController = require('../controller/mainController')

//routes
router.get('/', mainController.homePage)
router.get('/aboutme', mainController.aboutme)
router.get('/skills', mainController.skills)
router.get('/contacts', mainController.contacts)
router.get('/projects', mainController.projects)

module.exports = router