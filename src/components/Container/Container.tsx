import type { Component } from "solid-js";

import type { Props } from "./types";
import style from "./Container.module.css";

const Container: Component<Props> = ({ children }) => {
  return (
    <div class={style.wrapper}>
      <div class={style.container}>{children}</div>
    </div>
  );
};

export default Container;
