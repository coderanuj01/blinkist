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

  it("card button", () => {
    render(
      <SimpleButtonComponent
        children={"test content"}
        icon={<DropDownIcon />}
        buttonType="buttonForCard"
      />
    );

    const simpleButtonText = screen.getByText("test content");
    expect(simpleButtonText).toBeInTheDocument();
  });

  it("library with button", () => {
    render(
      <SimpleButtonComponent
        children={"test content"}
        icon={<DropDownIcon />}
        buttonType="libraryWithBorder"
      />
    );

    const simpleButtonText = screen.getByText("test content");
    expect(simpleButtonText).toBeInTheDocument();
  });
});
