import { Grid } from "@mui/material";
import { InfoCardComponent } from "../../Organisms/BookCard/Infocard";
import { styled } from "@mui/system";

type cardProps = {
  id: number;
  title: string;
  author: string;
  timeToRead: number;
  numberOfReads: number;
  image?: string;
  status: {
    isTrending: boolean;
    isFinished: boolean;
    isFeatured: boolean;
    justAdded: boolean;
  };
};

type CardGridProps = {
  cardList?: Array<cardProps>;
  cardsType?:
    | "reading"
    | "addToLibrary"
    | "addToLibraryColor"
    | "finished"
    | "readAgain";
};

const CardBox = styled("div")({
  width: "912px",
  marginLeft: "264px",
});

export const CardGridComponent = (props: CardGridProps) => {
  return (
    <CardBox>
      <Grid container spacing={2}>
        {props.cardList?.map((item) => {
          return (
            <Grid item xs={4} key={item.id}>
              <InfoCardComponent
                source={item.image}
                title={item.title}
                writer={item.author}
                readCount={item.numberOfReads}
                readTime={item.timeToRead}
                readStatus={props.cardsType}
              ></InfoCardComponent>
            </Grid>
          );
        })}
      </Grid>
    </CardBox>
  );
};
