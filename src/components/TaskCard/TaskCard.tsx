import type { Component } from "solid-js";
import { RiSystemCheckLine, RiSystemCloseLine } from "solid-icons/ri";

import style from "./TaskCard.module.css";
import { Props } from "./type";

const TaskCard: Component<Props> = ({
  isCompleted,
  onComplete,
  onDelete,
  title,
}) => {
  return (
    <div class={style.taskcard}>
      <div class={style.taskcard_content}>
        <div class={style.taskcard_title}>{title}</div>
        <div class={style.taskcard_complete} onClick={() => onComplete()}>
          <RiSystemCheckLine />
        </div>
        <div class={style.taskcard_delete} onClick={() => onDelete()}>
          <RiSystemCloseLine />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
