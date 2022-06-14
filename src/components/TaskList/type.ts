import { ITask, Task } from "../../services/IndexedDB/db";

export type SortedTaskItems = {
  todo: ITask[];
  completed: ITask[];
};

export type Props = {
  items: ITask[];
  onUpdateTask(): Promise<void>;
};
