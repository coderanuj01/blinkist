import Box from "@mui/material/Box";
import { styled } from "@mui/system";

type UnderlineButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const MyText = styled("text")({
  fontFamily: "cera Pro",
  fontWeight: 500,
  fontSize: "16px",
  color: "#03314B",
});

export const UnderlineButtonComponent = (props: UnderlineButtonProps) => {
  return (
    <Box sx={props.style}>
      <MyText>{props.children}</MyText>
    </Box>
  );
};
