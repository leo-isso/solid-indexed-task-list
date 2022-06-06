import { Component, createSignal } from "solid-js";
import { RiSystemAddLine } from "solid-icons/ri";

import style from "./TaskForm.module.css";
import TaskService from "../../services/task/task.service";

const TaskForm: Component = () => {
  const [getTaskTitle, setTaskTitle] = createSignal("");

  const handleTitleChange = (e: Event) => {
    setTaskTitle((e.target as HTMLInputElement).value);
  };

  const handleSubmit = async () => {
    await TaskService.create({
      title: getTaskTitle(),
      isComplete: false,
    });
  };

  return (
    <div class={style.taskform}>
      <div class={style.taskform_container}>
        <form onSubmit={handleSubmit}>
          <div class={style.taskform_form}>
            <input
              id="task-name"
              value={getTaskTitle()}
              placeholder="Add new task..."
              onInput={(e) => handleTitleChange(e)}
            />
            <button type="submit">
              <RiSystemAddLine />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
