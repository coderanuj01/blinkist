import { Box, ThemeProvider, Typography } from "@mui/material";
import { CardGridComponent } from "../CardGrid/CardGrid";
import BooksDetails from "../../../data/BooksDetails";
import theme from "../../../theme/theme";
import { UnderlineButtonComponent } from "../../molecules/UnderlinedButton/UnderlineButton";
import { useState } from "react";

type BookPageProps = {};

export const LibraryBodyComponent = () => {
  const [readStatus, setReadStatus] = useState(1);

  const switchReading1 = () => {
    setReadStatus(2);
  };

  const switchReading2 = () => {
    setReadStatus(1);
  };

  let currentReadingList = BooksDetails.filter(
    (item) => !item.status.isFinished
  );

  let finishedList = BooksDetails.filter((item) => item.status.isFinished);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "145px" }}>
        <Box sx={{ marginLeft: "264px", marginTop: "59px" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Cera Pro",
              fontWeight: 700,
              fontSize: "36px",
            }}
          >
            My Library
          </Typography>
        </Box>
        <Box sx={{ marginTop: "60px" }}>
          <Box sx={{ display: "flex", marginLeft: "264px" }}>
            <Box onClick={switchReading2} sx={{ cursor: "pointer" }}>
              <UnderlineButtonComponent
                children={"Currently reading"}
                style={
                  readStatus === 1
                    ? {
                        borderBottom: "2px solid #2CE080",
                        width: 300,
                        paddingBottom: 1,
                      }
                    : {
                        borderBottom: "2px solid #E1ECFC",
                        width: 300,
                        paddingBottom: 1,
                      }
                }
              ></UnderlineButtonComponent>
            </Box>
            <Box onClick={switchReading1} sx={{ cursor: "pointer" }}>
              <UnderlineButtonComponent
                children={"Finished"}
                style={
                  readStatus === 2
                    ? {
                        borderBottom: "2px solid #2CE080",
                        width: 300,
                        paddingBottom: 1,
                      }
                    : {
                        borderBottom: "2px solid #E1ECFC",
                        width: 300,
                        paddingBottom: 1,
                      }
                }
              ></UnderlineButtonComponent>
            </Box>
            <UnderlineButtonComponent
              style={{
                borderBottom: "2px solid #E1ECFC",
                width: 300,
                paddingBottom: 1,
              }}
            ></UnderlineButtonComponent>
          </Box>
        </Box>
        <Box sx={{ marginBottom: "111px", marginTop: "25px" }}>
          {readStatus === 1 ? (
            <CardGridComponent
              cardList={currentReadingList}
            ></CardGridComponent>
          ) : (
            <CardGridComponent cardList={finishedList}></CardGridComponent>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
