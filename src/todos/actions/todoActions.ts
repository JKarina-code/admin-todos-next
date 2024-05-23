"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
};

export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  await sleep(1);
  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });

  if (!todo) throw new Error("Todo not found");
  // Update the completion status of the todo item.
  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });
  revalidatePath("/todos"); // Revalidate the /todos path to update the client-side cache.
  return updatedTodo; // Return the updated todo item.
};

export const createTodo = async( description: string ) => {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath('/dashboard/todos');
     return todo;
  }

  export  const deleteCompleted = async (): Promise<void> => {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });

    revalidatePath('/dashboard/todos');
  }

