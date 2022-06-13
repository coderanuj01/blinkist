import { ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ImageComponent } from "../../atoms/Image/Image";
import { SimpleButtonComponent } from "../SimpleButton.tsx/SimpleButton";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as More } from "../../../Icon/more.svg";
import { ReactComponent as User } from "../../../Icon/user.svg";
import { ReactComponent as TimeIcon } from "../../../Icon/clock.svg";
import theme from "../../../theme/theme";
import { useNavigate } from "react-router-dom";

type InfocardProps = {
  source?: any;
  title?: React.ReactNode;
  writer?: React.ReactNode;
  readTime?: number;
  readCount?: number;
  readStatus?:
    | "reading"
    | "addToLibrary"
    | "addToLibraryColor"
    | "finished"
    | "readAgain";
};

export const InfoCardComponent = (props: InfocardProps) => {
  const navigate = useNavigate();
  const showBookDetail = () => {
    navigate("/bookdetails", {
      state: { text: props.title, imageSrc: props.source },
    });
  };

  const elem = () => {
    switch (props.readStatus) {
      case "addToLibrary":
        return (
          <Box
            sx={{
              marginTop: "0px",
              width: "100%",
              borderTop: "1px solid #E1ECFC",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SimpleButtonComponent
              buttonType={"libraryWithBorder"}
              children={"Add to library"}
              icon={<AddIcon />}
            ></SimpleButtonComponent>
          </Box>
        );

      case "addToLibraryColor":
        return (
          <Box
            sx={{
              width: "283px",
              backgroundColor: "#0365F2",
              display: "flex",
              justifyContent: "center",
              paddingTop: "5px",
              height: "47px",
              borderTop: "1px solid #E1ECFC",
            }}
          >
            <SimpleButtonComponent
              buttonType={"buttonForAddCard"}
              children={"Add to library"}
              icon={<AddIcon />}
            ></SimpleButtonComponent>
          </Box>
        );

      case "finished":
        return (
          <Box
            sx={{
              marginTop: "0px",
              borderTop: "1px solid #E1ECFC",
              paddingTop: "7px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>Finished</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#E1ECFC",
                  height: "15px",
                  width: "88px",
                  marginTop: "6px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#F1F6F4",
                  height: "15px",
                  width: "195px",
                  marginTop: "6px",
                }}
              ></Box>
            </Box>
          </Box>
        );

      case "readAgain":
        return (
          <Box
            sx={{
              marginTop: "0px",
              borderTop: "1px solid #E1ECFC",
              paddingTop: "7px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>Read again</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#E1ECFC",
                height: "15px",
                width: "283px",
                marginTop: "6px",
              }}
            ></Box>
          </Box>
        );

      case "reading":
        return (
          <Box sx={{ marginTop: "0px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                height: "33px",
                paddingRight: "30px",
              }}
            >
              <More width={"25px"} height={"25px"}></More>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#E1ECFC",
                  height: "15px",
                  width: "88px",
                  marginTop: "6px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#F1F6F4",
                  height: "15px",
                  width: "195px",
                  marginTop: "6px",
                }}
              ></Box>
            </Box>
          </Box>
        );

      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "486px",
          width: "284px",
          border: "1px solid #E1ECFC",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <ImageComponent source={props.source}></ImageComponent>
        <Box sx={{ backgroundColor: "#FFFFFF" }} onClick={showBookDetail}>
          <Box sx={{ marginLeft: "16px", marginTop: "15px" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#03314B", fontWeight: 700, fontSize: "18px" }}
            >
              {props.title}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "16px", marginTop: "15px" }}>
            <Typography
              variant="body1"
              sx={{ color: "#6D787E", fontSize: 16, fontWeight: 500 }}
            >
              {props.writer}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              marginLeft: "10px",
              marginTop: "16px",
              marginBottom: "10px",
            }}
          >
            <Box sx={{ marginLeft: 0 }}>
              <SimpleButtonComponent
                icon={<TimeIcon />}
                buttonType={"buttonForCard"}
                children={props.readTime + "-minutes read"}
              ></SimpleButtonComponent>
            </Box>
            <Box sx={{ marginRight: 0 }}>
              <SimpleButtonComponent
                icon={<User />}
                buttonType={"buttonForCard"}
                children={props.readCount + "k reads"}
              ></SimpleButtonComponent>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "5px",
            bottom: 0,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <>{elem()}</>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
