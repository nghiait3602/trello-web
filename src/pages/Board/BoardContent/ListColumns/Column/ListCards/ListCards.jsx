import React from "react";
import Box from "@mui/material/Box";
import TrelloCard from "./Card/Card";

function ListCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc(
            ${theme.trelloCustom.boardContentHeight} 
            - ${theme.spacing(5)}
            - ${theme.trelloCustom.columnHeaderHeight} 
            - ${theme.trelloCustom.columFooterHeight}
            )`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "bfc2cf",
        },
      }}
    >
      <TrelloCard />
      <TrelloCard temporaryHideMedia />
    </Box>
  );
}

export default ListCards;
