import type { Component } from "solid-js";
import { RiSystemCheckLine, RiSystemCloseLine } from "solid-icons/ri";

import style from "./TaskList.module.css";
import { Props, SortedTaskItems, TaskListItems } from "./type";
import TaskCard from "../TaskCard";

const TaskList: Component<Props> = ({ items }) => {
  const sortedTasks = items.reduce(
    (prev: SortedTaskItems, item) => {
      const tasks = { ...prev };

      if (item.isComplete) {
        tasks.completed.push(item);
        return tasks;
      }

      tasks.todo.push(item);
      return tasks;
    },
    {
      todo: [],
      completed: [],
    }
  );

  const renderItems = (items: TaskListItems[]) =>
    items.map((item) => (
      <div class={style.tasklist_taskcard}>
        <TaskCard
          title={item.title}
          isCompleted={item.isComplete}
          onComplete={() => {}}
          onDelete={() => {}}
        />
      </div>
    ));

  return (
    <div class={style.tasklist}>
      <div class={style.tasklist_container}>
        <div class={style.tasklist_title}>
          <h2>Todo Tasks</h2>
        </div>
        <div class={style.tasklist_list}>{renderItems(sortedTasks.todo)}</div>
        <div class={style.tasklist_title}>
          <h2>Completed Tasks</h2>
        </div>
        <div class={style.tasklist_list}>
          {renderItems(sortedTasks.completed)}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
