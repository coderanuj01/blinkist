import { Box } from "@mui/material";

type libraryProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

export const LibraryPageComponent = (props: libraryProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>{props.header}</Box>
      <Box>{props.body}</Box>
      <Box>{props.footer}</Box>
    </Box>
  );
};
