import type { Component } from "solid-js";
import { RiEditorListUnordered } from "solid-icons/ri";

import style from "./Header.module.css";

const Header: Component = () => {
  return (
    <div class={style.header}>
      <div class={style.header_content}>
        <div class={style.header_icon}>
          <RiEditorListUnordered size="32px" />
        </div>
        <div class={style.header_text}>
          <h1>Indexed Task List</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
