import { LibraryBodyComponent } from "../../components/Organisms/LibraryBody/LibraryBody";
import { PageTemplateComponent } from "../../components/templates/pageTemplate/pageTemplate";

export const Library = () => {
  return (
    <>
      <PageTemplateComponent body={<LibraryBodyComponent />} />
    </>
  );
};
