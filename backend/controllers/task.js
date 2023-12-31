import Task from '../models/Task.js';
import createError from '../utils/createError.js';

export const createTask = async (req, res, next) => {
    try{
        const  newTask = new Task({
            title: req.body.title,
            user: req.user.id,
            completed: req.body.completed
        });
        const savedTask = await newTask.save();
        return res.status(200).json(savedTask);
    }
    catch(err){
        return next(err);
    }
}

export const getAllTask = async (req, res, next) => {
    try{
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    }
    catch(err){
        return next(err);
    }
}

export const getUserTasks = async (req, res, next) => {
    try{
        const tasks = await Task.find({user: req.user.id});
        return res.status(200).json(tasks);
    }
    catch(err){
        return next(err);
    }
}

export const updateTasks = async (req, res, next) => {
    try{
        const task = await Task.findById(req.params.taskId).exec();
        if(!task){
            return next(createError({status:404, message:'No task found'}));
        }
        if(task.user.toString() != req.user.id){
            return next(createError({status:404, message:"You cannot update the task"}))
        }
        const updatedTasks = await Task.findByIdAndUpdate(req.params.taskId, {
            title: req.body.title,
            completed: req.body.completed
        }, { new: true});
        return res.status(200).json(updatedTasks);
    }
    catch(err){
        return next(err);
    }
}

export const deleteTasks = async (req, res, next) => {
    try{
        const task = await Task.findById(req.params.taskId).exec();
        if(!task){
            return next(createError({status:404, message:'No task found'}));
        }
        if(task.user.toString() != req.user.id){
            return next(createError({status:404, message:"You cannot update the task"}))
        }
        await Task.findByIdAndDelete(req.params.taskId);
        return res.status(200).json('Tasks deleted successfully');
    }
    catch(err){
        next(err);
    }
}