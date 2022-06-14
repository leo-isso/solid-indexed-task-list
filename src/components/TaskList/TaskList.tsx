import type { Component } from "solid-js";

import style from "./TaskList.module.css";
import TaskCard from "../TaskCard";

import TaskService from "../../services/task/task.service";
import { ITask } from "../../services/IndexedDB/db";
import { Props, SortedTaskItems } from "./type";

const TaskList: Component<Props> = ({ items, onUpdateTask }) => {
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

  const renderItems = (items: ITask[]) =>
    items.map((item) => (
      <div class={style.tasklist_taskcard}>
        <TaskCard
          title={item.title}
          isCompleted={item.isComplete}
          onComplete={async () => {
            await TaskService.update(item.id);
            await onUpdateTask();
          }}
          onDelete={async () => {
            await TaskService.delete(item.id);
            await onUpdateTask();
          }}
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
