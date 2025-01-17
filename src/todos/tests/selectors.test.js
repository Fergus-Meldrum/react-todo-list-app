import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      {
        text: "Sat Hello",
        isCompleted: true,
      },
      {
        text: "Say Goodbye",
        isCompleted: false,
      },
      {
        text: "Climb Everest",
        isCompleted: false,
      },
    ];
    const expected = [
      {
        text: "Sat Hello",
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
