import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import dropshipping from "../../../../public/Images/dropshipping.png";
import { InfoCardComponent } from "./Infocard";

let TestCard = (args: any) => {
  return (
    <BrowserRouter>
      <InfoCardComponent {...args} />
    </BrowserRouter>
  );
};

describe("info card test", () => {
  it("info card finished", () => {
    render(
      <TestCard
        source={dropshipping}
        title="dropShipping"
        writer="James Moore"
        readCount={34}
        readTime={23}
        readStatus="finished"
      />
    );

    const bookElement = screen.getByRole("img");
    expect(bookElement).toBeInTheDocument();

    const bookTitle = screen.getByText("dropShipping");
    expect(bookTitle).toBeInTheDocument();

    const bookWriter = screen.getByText("James Moore");
    expect(bookWriter).toBeInTheDocument();

    const bookTime = screen.getByText("23-minutes read");
    expect(bookTime).toBeInTheDocument();

    const bookReads = screen.getByText("34k reads");
    expect(bookReads).toBeInTheDocument();

    const bookStatus = screen.getByText("Finished");
    expect(bookStatus).toBeInTheDocument();
  });

  it("info card addToLibraryColor", () => {
    render(
      <TestCard
        source={dropshipping}
        title="dropShipping"
        writer="James Moore"
        readCount={34}
        readTime={23}
        readStatus="addToLibraryColor"
      />
    );

    const bookElement = screen.getByRole("img");
    expect(bookElement).toBeInTheDocument();

    const bookTitle = screen.getByText("dropShipping");
    expect(bookTitle).toBeInTheDocument();

    const bookWriter = screen.getByText("James Moore");
    expect(bookWriter).toBeInTheDocument();

    const bookTime = screen.getByText("23-minutes read");
    expect(bookTime).toBeInTheDocument();

    const bookReads = screen.getByText("34k reads");
    expect(bookReads).toBeInTheDocument();

    const bookStatus = screen.getByText("Finished");
    expect(bookStatus).toBeInTheDocument();
  });

  it("info card readAgain", () => {
    render(
      <TestCard
        source={dropshipping}
        title="dropShipping"
        writer="James Moore"
        readCount={34}
        readTime={23}
        readStatus="readAgain"
      />
    );

    const bookElement = screen.getByRole("img");
    expect(bookElement).toBeInTheDocument();

    const bookTitle = screen.getByText("dropShipping");
    expect(bookTitle).toBeInTheDocument();

    const bookWriter = screen.getByText("James Moore");
    expect(bookWriter).toBeInTheDocument();

    const bookTime = screen.getByText("23-minutes read");
    expect(bookTime).toBeInTheDocument();

    const bookReads = screen.getByText("34k reads");
    expect(bookReads).toBeInTheDocument();

    const bookStatus = screen.getByText("Finished");
    expect(bookStatus).toBeInTheDocument();
  });
});
