import React, { useCallback, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "@mui/material";
import { IModalFilterProps, IDataCategory } from "./types";
import { ChangeEvent } from "react";

const ModalFilter: React.FC<IModalFilterProps> = ({
  elements,
  setElements,
}) => {
  const [activeCategory, setActiveCategory] = useState<IDataCategory | null>(
    null
  );

  const items = useMemo(() => {
    if (activeCategory && elements) {
      const findEl = elements.find((el) => el.name === activeCategory.name)

      return findEl?.items || []
    }

    return []
  },[elements, activeCategory])

  const handleChangeGroup = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;

    const findedEl = elements?.find((el) => el.name === value);
    if (findedEl) {
      setActiveCategory(findedEl);
    }
  }, [elements]);

  const handleChangeElements = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const value = target.value;

      if (activeCategory && elements && setElements) {
        const newElements = elements?.map((el) => {
          if (el.name === activeCategory.name) {
            return {
              ...el,
              items:
                el?.items?.map((item) => {
                  if (item.id === Number(value)) {
                    return {
                      ...item,
                      checked: !item.checked,
                    };
                  }

                  return item;
                }) || null,
            };
          }

          return el;
        });

        setElements(newElements);
      }
    },
    [elements, activeCategory, setElements]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        p: 3,
        justifyContent: "space-between",
        minHeight: "100%",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%", border: "1px solid green" }}>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleChangeGroup}
            >
              {elements &&
                elements.map((el, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor:
                          el.name === activeCategory?.name
                            ? "gray"
                            : "transparent",
                      }}
                    >
                      <FormControlLabel
                        value={el.name}
                        control={
                          <Radio
                            icon={<FolderOpenIcon sx={{ color: "#1976d2" }} />}
                            checkedIcon={
                              <FolderOpenIcon sx={{ color: "#1976d2" }} />
                            }
                            value={el.name}
                          />
                        }
                        label={el.name}
                        sx={{ marginLeft: "0", margiRight: "0" }}
                      />
                    </Box>
                  );
                })}
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex" }}>
          <FormGroup onChange={handleChangeElements}>
            {items.map((el, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={el.id}
                    control={<Checkbox checked={el.checked} />}
                    label={el.name}
                    disabled={false}
                    sx={{
                      marginLeft: 0,
                    }}
                  />
                );
              })}
          </FormGroup>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" size="small" sx={{ mr: 2, px: 4 }}>
          Cancel
        </Button>
        <Button variant="contained" size="small" sx={{ mr: 2, px: 4 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ModalFilter;
