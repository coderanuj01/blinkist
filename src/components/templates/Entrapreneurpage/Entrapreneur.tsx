import { Box } from "@mui/material";

type EntrepreneurshipProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

export const EntrepreneurshipPageComponent = (props: EntrepreneurshipProps) => {
  return (
    <Box>
      {props.header}
      <Box
        sx={{ marginLeft: "264px", marginTop: "34px", marginBottom: "76px" }}
      >
        {props.body}
      </Box>
      {props.footer}
    </Box>
  );
};
