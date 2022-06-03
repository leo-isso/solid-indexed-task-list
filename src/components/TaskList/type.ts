import { Task } from "../../services/IndexedDB/db";

export type SortedTaskItems = {
  todo: Task[];
  completed: Task[];
};

export type Props = {
  items: Task[];
};
