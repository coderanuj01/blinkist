import { render, screen } from "@testing-library/react";
import { ReactComponent as DropDownIcon } from "../../../Icon/dropdownarrow.svg";
import { SimpleButtonComponent } from "./SimpleButton";

describe("simpleButton test", () => {
  it("connected hover button", () => {
    render(
      <SimpleButtonComponent
        children={"test content"}
        icon={<DropDownIcon />}
        buttonType="connectHover"
      />
    );

    const simpleButtonText = screen.getByText("test content");
    expect(simpleButtonText).toBeInTheDocument();
  });
});

describe("simpleButton test again", () => {
  it("connected rest button", () => {
    render(
      <SimpleButtonComponent
        children={"test content"}
        icon={<DropDownIcon />}
        buttonType="connectRest"
      />
    );

    const simpleButtonText = screen.getByText("test content");
    expect(simpleButtonText).toBeInTheDocument();
  });
});
