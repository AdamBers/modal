import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FilteredList from "../FilteredList/FilteredList";
import NiceModal from "@ebay/nice-modal-react";
import { useContext } from "react";
import { DataContext } from "../../context";
import MyModal from "../MyModal/Index";

const Characteristics: React.FC = () => {
  const context = useContext(DataContext);

  const elements = context.data;

  const showModal = () => {
    NiceModal.show(MyModal, {
      elements: context.data,
      setElements: context.setData,
    }).then(() => {});
  };
  return (
    <Container
      component="section"
      sx={{
        minHeight: "400px",
        borderRadius: "8px",
        maxHeight: "90vh",
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
        boxShadow:
          "0 1px 1px rgba(0,0,0,.08), 0 2px 1px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          margin: 5,
        }}
      >
        Characteristics
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingY: 3,
          paddingX: 4,
          backgroundColor: "#f0f2f5",
          borderBottom: "1px solid #d1d9e0",
          borderTop: "1px solid #d1d9e0",
        }}
      >
        <TextField
          label="Browse added properties ..."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flexGrow: 1,
            marginRight: 3,
            fontSize: "12px",
            lineHeight: "26px",
            "&:hover": {
              outline: "none",
            },
          }}
        />
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            showModal();
          }}
          sx={{ fontSize: "12px", lineHeight: "26px" }}
        >
          Configure property
        </Button>
      </Box>
      <FilteredList elements={elements} />
    </Container>
  );
};

export default Characteristics;
