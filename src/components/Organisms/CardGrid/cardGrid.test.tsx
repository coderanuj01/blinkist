import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CardGridComponent } from "./CardGrid";

let TestCardGrid = (args: any) => {
  return (
    <BrowserRouter>
      <CardGridComponent {...args} />
    </BrowserRouter>
  );
};

const data = [
  {
    id: 2,
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
    render(<TestCardGrid cardList={data} />);

    const cardTitle = screen.getByText("Loving Your Business");
    expect(cardTitle).toBeInTheDocument();

    const cardAuthor = screen.getByText("Debbie King");
    expect(cardAuthor).toBeInTheDocument();
  });
});
