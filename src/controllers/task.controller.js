import Task from '../models/Task';

// Obtener todas las tareas
export const findAllTask = async (req, res) => {
   try {
      const tasks = await Task.find();
      res.json(tasks)
   } catch (error) {
      res.status(500).json({
         message: error.message || "Something wrong while retrieving all tasks"
      })
   }
}

//  Crear Tareas
export const createTask = async (req, res) => {
   // Validando si no exite el título porque es requerido
   if(!req.body.title){
      return res.status(400).send({message: 'Title is required'})
   }

   try {
      const newTask = new Task({
         title: req.body.title,
         description: req.body.description,
         done: req.body.done ? req.body.done : false
      })
      const taskSaved = await newTask.save();
      res.json(taskSaved)
   } catch (error) {
      res.status(500).json({
         message: error.message || "Something wrong while creating task"
      })
   }
}

// Encontrar una sola tarea por ID
export const findOneTask = async (req, res) => {
   const { id } = req.params;

   try {
      const task = await Task.findById(id);

      if (!task) 
         return res
            .status(400)
            .json({message: `Task whit id: ${id} does not exists`});

      res.json(task)
   } catch (error) {
      res.status(500).json({
         message: error.message || `Error retrieving Task whit id: ${id}`
      })
   }
}

// Eliminar tarea por ID
export const deleteTask = async (req, res) => {
   const { id } = req.params;
   
   try {
      await Task.findByIdAndDelete(req.params.id)
      res.json({
      message: "Task were deleted successfully"
   })
   } catch (error) {
      res.status(500).json({
         message: error.message || `Can't delete Task whit id: ${id}`
      })
   }
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
