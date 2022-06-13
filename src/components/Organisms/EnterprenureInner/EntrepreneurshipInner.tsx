import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import { InfoCardComponent } from "../../molecules/InfoCards/Infocard";

type cardProps = {
  id: number;
  title: string;
  author: string;
  timeToRead: number;
  numberOfReads: number;
  image: string;
  status: {
    isTrending: boolean;
    isFinished: boolean;
    isFeatured: boolean;
    justAdded: boolean;
  };
};

type CardGridProps = {
  cardList?: Array<cardProps>;
  title?: React.ReactNode;
};

export const EntrepreneurshipInnerComponent = (props: CardGridProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "912px", marginTop: "80px" }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "24px", fontWeight: "700", color: "#03314B" }}
        >
          {props.title}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "25px" }}>
          {props.cardList?.map((item) => {
            return (
              <Grid item xs={4} key={item.id}>
                <InfoCardComponent
                  source={item.image}
                  title={item.title}
                  writer={item.author}
                  readCount={item.numberOfReads}
                  readTime={item.timeToRead}
                  readStatus={"addToLibrary"}
                ></InfoCardComponent>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
