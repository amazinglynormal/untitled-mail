import { render } from "@testing-library/react";
import { App } from "../app/App";

describe("<App>", () => {
  test("renders", () => {
    const { getByRole } = render(<App />);

    expect(getByRole("heading")).toBeInTheDocument();
  });
});
