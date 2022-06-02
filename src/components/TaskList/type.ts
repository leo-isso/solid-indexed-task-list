type TaskListItems = {
  id: string;
  title: string;
  isComplete: boolean;
};

export type Props = {
  items: TaskListItems[];
};
