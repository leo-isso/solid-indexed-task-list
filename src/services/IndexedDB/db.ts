import Dexie, { Table } from "dexie";

export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export class DexieDB extends Dexie {
  tasks!: Table<Task>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      tasks: "++id, title, isComplete",
    });
  }
}

export const DDB = new DexieDB();
