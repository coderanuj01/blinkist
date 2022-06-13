import { render, screen } from "@testing-library/react";
import { UnderlineButtonComponent } from "./UnderlineButton";

describe("underline button test", () => {
  it("selected button test", () => {
    render(
      <UnderlineButtonComponent
        underlineButtonType="unSelectedWithWhite"
        children={"testing content"}
      />
    );
    const buttonelement = screen.getByText("testing content");
    expect(buttonelement).toBeInTheDocument();
  });
});
