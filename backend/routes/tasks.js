import express from 'express';
import {createTask, getAllTask, getUserTasks, updateTasks, deleteTasks} from '../controllers/task.js';

const router = express.Router();

router.post('/', createTask);
router.get('/all', getAllTask);
router.get('/myTasks', getUserTasks);
router.put('/:taskId', updateTasks);
router.delete('/:taskId', deleteTasks);

export default router;