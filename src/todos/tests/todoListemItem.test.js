import { expect } from "chai";
import { getBorderStyleForDate } from "../ToDoListItem";

describe("getBorderStyleForDate", () => {
  it("returns none for a date less than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);

    const expected = "none";
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
  it("returns a boarder when a date is more than five days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 7);

    const expected = "2px solid red";
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
});
