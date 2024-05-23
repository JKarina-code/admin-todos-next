import { Todo } from "@prisma/client";

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };

  const todo = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log({ todo });

  return todo;
};
