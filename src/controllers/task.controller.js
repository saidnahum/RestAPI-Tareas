import Task from '../models/Task';

// Obtener todas las tareas
export const findAllTask = async (req, res) => {
   const tasks = await Task.find();
   res.json(tasks)
}

//  Crear Tareas
export const createTask = async (req, res) => {
   const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false
   })
   const taskSaved = await newTask.save();
   res.json(taskSaved)
}

// Encontrar una sola tarea por ID
export const findOneTask = async (req, res) => {
   const task = await Task.findById(req.params.id)
   res.json(task)
}

// Eliminar tarea por ID
export const deleteTask = async (req, res) => {
   await Task.findByIdAndDelete(req.params.id)
   res.json({
      message: "Task were deleted successfully"
   })
}

// Obtener todas las tareas que coincidan con un parámeteo
export const findAllTaskDone = async (req, res) => {
   const tasks = await Task.find({done: true});
   res.json(tasks)
}

// Actualizar tareas
export const updateTask = async (req, res) => {
   await Task.findByIdAndUpdate(req.params.id, req.body);
   res.json({message: 'Task was updated Successfully'})
}
