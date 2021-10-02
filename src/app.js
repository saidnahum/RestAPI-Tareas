import express from 'express';
import TaskRoutes from './routes/task.routes';

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

app.use(express.json());

// routes
app.get('/', (req, res) => {
   res.json({message: 'Home Page'})
});

app.use('/api/tasks', TaskRoutes);

export default app;