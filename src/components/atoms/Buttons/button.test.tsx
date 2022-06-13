import { ButtonComponent } from "./Button";
import React from "react";
import TestRenderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

describe("button component", () => {
  test("render text button", () => {
    render(<ButtonComponent variant="text" children="text Button" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("render outlined button", () => {
    render(<ButtonComponent variant="text" children="outlined Button" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
