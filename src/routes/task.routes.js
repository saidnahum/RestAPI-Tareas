import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
   res.send('Tareas')
});

export default router