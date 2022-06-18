import { BookDetailBodyComponent } from "../../components/Organisms/BookDetailBody/BookDetailBody";
import { PageTemplateComponent } from "../../components/templates/pageTemplate/pageTemplate";

export const BookDetails = () => {
  return (
    <>
      <PageTemplateComponent body={<BookDetailBodyComponent />} />
    </>
  );
};
