import type { Component } from "solid-js";

import Container from "./components/Container";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App: Component = () => {
  const items = [
    {
      id: 123,
      title: "Testing cards ma boi 0",
      isComplete: false,
    },
    {
      id: 1233,
      title: "Testing cards ma boi 1",
      isComplete: true,
    },
    {
      id: 125,
      title: "Testing cards ma boi 2",
      isComplete: false,
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <TaskForm />
        <TaskList items={items} />
      </Container>
    </div>
  );
};

export default App;
