import { Component, createSignal, onMount } from "solid-js";

import Container from "./components/Container";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./services/IndexedDB/db";

import TaskService from "./services/task/task.service";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const [tasks, setTasks] = createSignal<ITask[]>([]);

  const updateTasks = async () => {
    setIsLoading(true);
    const tasks = await TaskService.getMany();
    setTasks(tasks);
    setIsLoading(false);
  };

  onMount(async () => {
    await updateTasks();
  });

  return (
    <div>
      <Header />
      {!isLoading() && (
        <Container>
          <TaskForm />
          <TaskList items={tasks()} onUpdateTask={updateTasks} />
        </Container>
      )}
    </div>
  );
};

export default App;
