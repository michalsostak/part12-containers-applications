import Todo from "../Todos/Todo";
import { render, screen } from "@testing-library/react";

describe("Todo testing", () => {
  test("renders todo", async () => {
    const newTodo = {
      text: "todo test",
      done: true,
    };

    const doneInfo = 'done'
    const notDoneInfo = 'not done'

    render(<Todo todo={newTodo} doneInfo={doneInfo} notDoneInfo={notDoneInfo} />)

    const element = await screen.findByText("todo test")
  
    expect(element).toBeDefined()
  });
})