import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importando rutas para tasks
import TaskRoutes from './routes/task.routes';

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// midlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {
   res.json({message: 'Home Page'})
});

app.use('/api/tasks', TaskRoutes);

export default app;