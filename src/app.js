import express from 'express';
import TaskRoutes from './routes/task.routes';

const app = express();

app.set('port', process.env.PORT || 4000);

// Routes
app.get('/', (req, res) => {
   res.json({message: 'Home Page'})
});

app.use('/api/tareas', TaskRoutes);

export default app;