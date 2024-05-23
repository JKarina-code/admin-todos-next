"use client";
import { useOptimistic, startTransition } from "react";

import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  // useOptimistic hook for optimistic UI updates
  const [todoOptimistc, toggleOptimistc] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      completed: newCompleteValue,
    })
  );
  const onToggleTodo = async () => {
    try {
      // Start a transition for the optimistic update
      startTransition(() => toggleOptimistc(!todoOptimistc.completed));
      await toggleTodo(todoOptimistc.id, !todoOptimistc.completed);
    } catch (error) {
      // Revert optimistic update if there is an error
      toggleOptimistc(!todoOptimistc.completed);
    }
  };
  return (
    <div
      className={todoOptimistc.completed ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => onToggleTodo()}
          className={`
          flex p-2 rounded-md cursor-pointer
          hover:bg-opacity-60 ${
            todoOptimistc.completed ? "bg-blue-100" : "bg-red-100"
          }
         
        `}
        >
          {todoOptimistc.completed ? (
            <IoCheckboxOutline />
          ) : (
            <IoSquareOutline />
          )}
        </div>

        <div className="text-center sm:text-left">
          {todoOptimistc.description}
        </div>
      </div>
    </div>
  );
};
