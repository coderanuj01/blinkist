import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EntrepreneurshipInnerComponent } from "./EntrepreneurshipInner";

let TestInner = (args: any) => {
  return (
    <BrowserRouter>
      <EntrepreneurshipInnerComponent {...args} />
    </BrowserRouter>
  );
};

const data = [
  {
    id: 1,
    title: "Loving Your Business",
    author: "Debbie King",
    timeToRead: 13,
    numberOfReads: 1.7,
    status: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
];

describe("Card Grid test", () => {
  it("card grid", () => {
    render(<TestInner cardList={data} />);

    const cardTitle = screen.getByText("Loving Your Business");
    expect(cardTitle).toBeInTheDocument();

    const cardAuthor = screen.getByText("Debbie King");
    expect(cardAuthor).toBeInTheDocument();
  });
});
