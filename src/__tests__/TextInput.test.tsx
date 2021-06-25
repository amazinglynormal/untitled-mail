import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEvent } from "react";
import { TextInput } from "../components/TextInput";

const mockFunc = jest.fn();

describe("<TextInput>", () => {
  test("renders", () => {
    const { getByRole, getByLabelText } = render(
      <TextInput
        id="test"
        label="Test"
        value={"test"}
        onChangeHandler={mockFunc}
      />
    );

    const input = getByRole("textbox");
    const label = getByLabelText("Test");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveDisplayValue("test");
  });

  test("change handler called on user input", () => {
    const { getByRole } = render(
      <TextInput
        id="test"
        label="Test"
        value={"test"}
        onChangeHandler={mockFunc}
      />
    );

    const input = getByRole("textbox");

    expect(input).toHaveDisplayValue("test");

    userEvent.type(input, "{backspace}123");
    expect(mockFunc).toHaveBeenCalledTimes(4);
  });
});
