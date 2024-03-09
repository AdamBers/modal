import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ModalFilter from "./components/ModalFilter/Index";
import { IMyModalProps } from "./types";

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "70%",
  bgcolor: "background.paper",
  border: "none",
  backgroundColor: "#fff",
  borderRadius: "8px",
  color: "#52667a",
  boxShadow:
    "0 1px 1px rgba(0,0,0,.08), 0 2px 1px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)",
};

const MyModal = NiceModal.create((props: IMyModalProps) => {
  const { elements, setElements } = props;

  const modal = useModal();
  return (
    <Modal open={modal.visible} onClose={() => modal.hide()}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Properties
          </Typography>
          <Button onClick={() => modal.hide()}>
            <CloseIcon />
          </Button>
        </Box>

        <Box
          component="form"
          autoComplete="off"
          sx={{
            backgroundColor: "#f0f2f5",
            borderTop: "1px solid #d1d9e0",
            borderBottom: "1px solid #d1d9e0",
            paddingX: 4,
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
              width: "100%",
              marginRight: 3,
              fontSize: "12px",
              lineHeight: "26px",
              "&:hover": {
                outline: "none",
              },
              marginY: 3,
            }}
          />
        </Box>
        <ModalFilter elements={elements} setElements={setElements} />
      </Box>
    </Modal>
  );
});

export default MyModal;
