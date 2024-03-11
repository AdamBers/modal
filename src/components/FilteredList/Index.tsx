import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";
import { IFilteredListProps } from "./types";

const FilteredList: React.FC<IFilteredListProps> = (props) => {
  const { elements, setElements } = props;
  const filtered = elements
    ?.map((item) => {
      if (item?.items?.some((el) => el.checked)) {
        return {
          ...item,
          items: item.items?.filter((el) => el.checked),
        };
      }
      return;
    })
    .filter(Boolean);
  console.log(filtered);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = (cotegoryId: number, id: number): void => {
    if (setElements) {
      setElements((prevState) => {
        return prevState?.map((element) => {
          if (element.id === cotegoryId) {
            return {
              ...element,
              items:
                element.items?.map((item) => {
                  if (item.id === id) {
                    return {
                      ...item,
                      checked: false,
                    };
                  }

                  return item;
                }) || null,
            };
          }

          return element;
        });
      });
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ paddingX: 5 }}>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell align="left">Categories</TableCell>
            <TableCell align="left">Properties</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ paddingX: 5 }}>
          {filtered &&
            filtered.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>
                    {item?.items?.map((element) => (
                      <Chip
                        key={element.id}
                        label={element.name}
                        onClick={handleClick}
                        onDelete={() => {
                          handleDelete(item.id, element.id);
                        }}
                        deleteIcon={<CloseIcon />}
                        variant="outlined"
                        sx={{ mr: 1, borderRadius: "3px" }}
                      />
                    ))}
                  </TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilteredList;
