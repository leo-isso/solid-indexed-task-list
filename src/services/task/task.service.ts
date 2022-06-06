import { DDB, Task } from "../IndexedDB/db";

const TaskService = {
  async getMany() {
    return await DDB.tasks.toArray();
  },

  async delete(id: number) {
    await DDB.tasks.delete(id);
  },

  async update(id: number) {
    await DDB.tasks.update(id, { isComplete: true });
  },

  async create(data: Task) {
    await DDB.tasks.add(data);
  },
};

export default TaskService;
