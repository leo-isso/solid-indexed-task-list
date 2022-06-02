export type TaskListItems = {
  id: string;
  title: string;
  isComplete: boolean;
};

export type SortedTaskItems = {
  todo: TaskListItems[];
  completed: TaskListItems[];
};

export type Props = {
  items: TaskListItems[];
};
