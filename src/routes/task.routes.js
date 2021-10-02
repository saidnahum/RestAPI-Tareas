import { Router } from 'express';
import * as taskController from '../controllers/task.controller';

const router = Router();


router.get('/', taskController.findAllTask);

router.post('/', taskController.createTask);

router.get('/done', taskController.findAllTaskDone);

router.get('/:id', taskController.findOneTask);

router.delete('/:id', taskController.deleteTask);

router.put('/:id', taskController.updateTask);

export default router