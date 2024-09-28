const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/Employeecontroller');

// Route to add a new employee
router.post('/add-emp', employeeController.createEmployee);

module.exports = router;