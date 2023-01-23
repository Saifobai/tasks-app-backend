const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

// create a single task
const createSingleTask = asyncHandler(async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

//get all the tasks
const getAllTask = asyncHandler(async (req, res) => {
    try {
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// get a single task
const getSingleTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`No task with id ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// delete a task
const deleteATask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json(`No task with id ${id}`);
        }
        res.status(200).send("Task has been deleted successfully");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

//update a task
const updateTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json(`No task with id ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});




module.exports = {
    getAllTask,
    createSingleTask,
    getSingleTask,
    deleteATask,
    updateTask,
};
