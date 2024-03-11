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
import { useModal } from "@ebay/nice-modal-react";

const ModalFilter: React.FC<IModalFilterProps> = ({
  elements,
  setElements,
}) => {
  const [activeCategory, setActiveCategory] = useState<IDataCategory | null>(
    null
  );

  const [newFilteredElements, setNewFilteredElements] = useState(elements);

  const modal = useModal();
  const handleSubmit = () => {
    if (setElements) {
      setElements(newFilteredElements);
    }
    modal.hide();
  };
  const items = useMemo(() => {
    if (activeCategory && newFilteredElements) {
      const findEl = newFilteredElements.find(
        (el) => el.name === activeCategory.name
      );
      return findEl?.items || [];
    }

    return [];
  }, [newFilteredElements, activeCategory]);

  const handleSelectGroup = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const value = target.value;

      const findedEl = elements?.find((el) => String(el.id) === value);
      if (findedEl) {
        setActiveCategory(findedEl);
      }
    },
    [elements]
  );

  const handleChangeElements = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const value = target.value;

      if (activeCategory && newFilteredElements && setElements) {
        const newElements = newFilteredElements?.map((el) => {
          if (el.id === activeCategory.id) {
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

        setNewFilteredElements(newElements);
      }
    },
    [newFilteredElements, activeCategory, setNewFilteredElements]
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
        <Box sx={{ width: "50%" }}>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleSelectGroup}
            >
              {elements &&
                elements.map((el, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor:
                          el.name === activeCategory?.name
                            ? "#e3f3ff"
                            : "transparent",
                      }}
                    >
                      <FormControlLabel
                        value={el.id}
                        control={
                          <Radio
                            icon={<FolderOpenIcon sx={{ color: "#1976d2" }} />}
                            checkedIcon={
                              <FolderOpenIcon sx={{ color: "#1976d2" }} />
                            }
                            value={el.id}
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
        <Button
          variant="outlined"
          size="small"
          sx={{ mr: 2, px: 4 }}
          onClick={() => modal.hide()}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ mr: 2, px: 4 }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ModalFilter;
