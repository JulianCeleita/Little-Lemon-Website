
import { initializeTimes, updateTimes } from "./YourUtilityFunctions";

// Test the initializeTimes function
test("initializeTimes returns the expected initial times", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

// Test the updateTimes function
test("updateTimes returns the same times provided in the state", () => {
  const currentState = ["17:00", "18:00", "19:00"];
  const selectedDate = "2023-09-01";
  const updatedTimes = updateTimes(currentState, selectedDate);
  expect(updatedTimes).toEqual(currentState);
});