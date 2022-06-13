import { Box, ThemeProvider, Typography } from "@mui/material";
import { ReactComponent as TimeIcon } from "../../../Icon/clock.svg";
import { ReactComponent as ArrowForwardIcon } from "../../../Icon/side.svg";
import { BookDescription } from "../../../data/BookDescription";
import { ImageComponent } from "../../atoms/Image/Image";
import { ButtonComponent } from "../../atoms/Buttons/Button";
import theme from "../../../theme/theme";
import { useLocation } from "react-router-dom";
import { UnderlineButtonComponent } from "../../molecules/UnderlinedButton/UnderlineButton";
import { useState } from "react";

type BookDetailsProps = {
  title?: string;
};

export const BookDetailBodyComponent = (props: BookDetailsProps) => {
  const location: any = useLocation();
  console.log(typeof location);

  const [detailType, setDetailType] = useState(1);

  const changeDetail: Function = (num: number): void => {
    setDetailType(num);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginLeft: "264px",
          width: "930px",
          marginTop: "145px",
        }}
      >
        <Box sx={{ marginBottom: "40px" }}>
          <Typography variant="body2" sx={{ color: "#03314B" }}>
            {BookDescription.bookDescription.keyIdeas}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{ width: "700px", display: "flex", flexDirection: "column" }}
          >
            <Box>
              <Typography variant="h1">
                {location.state ? location.state.text : " "}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "24px" }}>
              <Typography sx={{ color: "#03314B", fontSize: 20 }}>
                {BookDescription.bookDescription.description}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "24px" }}>
              <Typography variant="body1">
                {BookDescription.bookDescription.author}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "19px" }}>
              <ButtonComponent
                variant={"text"}
                color={"inherit"}
                startIcon={<TimeIcon />}
                children={BookDescription.bookDescription.timeToRead}
              ></ButtonComponent>
            </Box>
            <Box sx={{ marginTop: "63px", display: "flex", gap: 2 }}>
              <ButtonComponent
                variant={"outlined"}
                children={"Read Now"}
                style={{
                  width: 122,
                  height: 44,
                  borderRadius: 4,
                  textTransform: "none",
                  border: "1px solid #042330",
                }}
                textColor={"#22C870"}
              ></ButtonComponent>
              <ButtonComponent
                variant={"contained"}
                // color={"success"}
                children={"Finished Reading"}
                textColor={"#03314B"}
              ></ButtonComponent>
              <ButtonComponent
                variant={"text"}
                color={"inherit"}
                children={"Send to Kindle"}
                endIcon={<ArrowForwardIcon />}
                textColor={"#6D787E"}
              ></ButtonComponent>
            </Box>
          </Box>
          <Box sx={{ width: "303px" }}>
            <ImageComponent
              source={location.state ? location.state.imageSrc : "No Image"}
            ></ImageComponent>
          </Box>
        </Box>
        <Box
          sx={{
            width: "912px",
            height: "296px",
            borderBottom: "1px solid #E1ECFC",
          }}
        >
          <Box sx={{ marginTop: "60px" }}>
            <Box sx={{ display: "flex", width: "500px" }}>
              <Box
                onClick={() => changeDetail(1)}
                sx={{ cursor: "pointer", width: "200px" }}
              >
                <UnderlineButtonComponent
                  children={"Synopsis"}
                  underlineButtonType={
                    detailType === 1
                      ? "unSelectedWithGreen"
                      : "unSelectedWithWhite"
                  }
                ></UnderlineButtonComponent>
              </Box>
              <Box
                onClick={() => changeDetail(2)}
                sx={{ cursor: "pointer", width: "200px" }}
              >
                <UnderlineButtonComponent
                  children={"Who is it for?"}
                  underlineButtonType={
                    detailType === 2
                      ? "unSelectedWithGreen"
                      : "unSelectedWithWhite"
                  }
                ></UnderlineButtonComponent>
              </Box>
              <Box
                onClick={() => changeDetail(3)}
                sx={{ cursor: "pointer", width: "200px" }}
              >
                <UnderlineButtonComponent
                  children={"About the Author"}
                  underlineButtonType={
                    detailType === 3
                      ? "unSelectedWithGreen"
                      : "unSelectedWithWhite"
                  }
                ></UnderlineButtonComponent>
              </Box>
            </Box>
            <Box
              sx={{
                width: "600px",
                height: "100px",
                marginTop: "20px",
                marginBottom: "80px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  lineHeight: "20.11px",
                  fontSize: "16px",
                  color: "#03314B",
                }}
              >
                {detailType === 1
                  ? BookDescription.tabs.synopsis
                  : detailType === 2
                  ? BookDescription.tabs.whoIsItFor
                  : BookDescription.tabs.authorInfo}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
