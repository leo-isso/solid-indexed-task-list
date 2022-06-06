import { Component, createSignal, onMount } from "solid-js";

import Container from "./components/Container";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { Task } from "./services/IndexedDB/db";

import TaskService from "./services/task/task.service";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const [tasks, setTasks] = createSignal<Task[]>([]);

  onMount(async () => {
    setIsLoading(true);
    const tasks = await TaskService.getMany();
    setTasks(tasks);
    setIsLoading(false);
  });

  return (
    <div>
      <Header />
      {!isLoading() && (
        <Container>
          <TaskForm />
          <TaskList items={tasks()} />
        </Container>
      )}
    </div>
  );
};

export default App;
