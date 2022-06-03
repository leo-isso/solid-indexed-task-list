import { DDB, Task } from "../IndexedDB/db";

const TaskService = {
  getMany() {},

  delete() {},

  update() {},

  async create(data: Task) {
    await DDB.tasks.add(data);
  },
};

export default TaskService;
