import { DDB, Task } from "../IndexedDB/db";

const TaskService = {
  async getMany() {
    return await DDB.tasks.toArray();
  },

  delete() {},

  update() {},

  async create(data: Task) {
    await DDB.tasks.add(data);
  },
};

export default TaskService;
