import { Box } from "@mui/material";

type BookPageProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

export const BookDetailComponent = (props: BookPageProps) => {
  return (
    <Box sx={{ height: "100vh" }}>
      {props.header}
      {props.body}
      {props.footer}
    </Box>
  );
};
