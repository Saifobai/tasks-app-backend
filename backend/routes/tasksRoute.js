const express = require('express');
const { getAllTask, createSingleTask, getSingleTask, deleteATask, updateTask } = require('../controllers/tasksController');


const router = express.Router();



//create a single task
router.post('/singletask', createSingleTask)

//get all tasks
router.get('/', getAllTask)

//get s single task
router.get('/singletask/:id', getSingleTask)

//delete s single task
router.delete('/deletetask/:id', deleteATask)

// update a task
router.put('/update/:id', updateTask)

module.exports = router