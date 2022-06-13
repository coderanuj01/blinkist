import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EntrepreneurshipComponent } from "./Entrepreneurship";

const TestEnterpreneur = (args: any) => {
  return (
    <BrowserRouter>
      <EntrepreneurshipComponent {...args} />
    </BrowserRouter>
  );
};

describe("enterprenueship test", () => {
  it("enterprenuership body", () => {
    render(<TestEnterpreneur />);

    const trendingBlink = screen.getByText("Trending blinks");
    expect(trendingBlink).toBeInTheDocument();

    const justAdded = screen.getByText("Just added");
    expect(justAdded).toBeInTheDocument();
  });
});
