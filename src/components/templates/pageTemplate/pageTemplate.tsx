import { Box } from "@mui/material";
import { FooterComponent } from "../../Organisms/Footer/footer";
import { NavbarComponent } from "../../Organisms/Navbar/Navbar";

type BookPageProps = {
  body?: React.ReactNode;
};

export const PageTemplateComponent = (props: BookPageProps) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <NavbarComponent />
      {props.body}
      <FooterComponent />
    </Box>
  );
};
