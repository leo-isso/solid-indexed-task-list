import type { Component } from "solid-js";

import Container from "./components/Container";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

const App: Component = () => {
  return (
    <div>
      <Header />
      <Container>
        <br />
        <TaskCard
          isCompleted={false}
          onComplete={() => {}}
          onDelete={() => {}}
          title="Testing the card"
        />
      </Container>
    </div>
  );
};

export default App;
