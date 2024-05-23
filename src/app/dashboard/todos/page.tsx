
export const dynamic = 'force-dynamic';
import prisma from "@/lib/prisma";
import { NewTodo, TodoGrid } from "@/todos";

export const metadata = {
  title: "Todos List",
  description: "SEO Title",
};

export default async function TodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodoGrid todos= {todos}/>
    </div>
  );
}
