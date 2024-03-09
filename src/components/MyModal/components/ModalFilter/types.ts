import { Dispatch, SetStateAction } from "react";

export interface IItems {
  id: number;
  name: string;
  checked: boolean;
}

export interface IDataCategory {
  name: string;
  items: IItems[] | null;
}

export interface IModalFilterProps {
  elements?: Array<IDataCategory>;
  setElements?: Dispatch<SetStateAction<Array<IDataCategory> | undefined>>;
}

// {elements &&
//   elements.map((el, index) => {
//     return (

// <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
//   <Checkbox
//     icon={<FolderOpenIcon sx={{ mr: 1, color: "#1976d2" }} />}
//     checkedIcon={
//       <FolderOpenIcon sx={{ mr: 1, color: "#1976d2" }} />
//     }
//   />
//   {el.name}
// </Box>

// <FormGroup key={index}>
//   <FormControlLabel
//     control={
//       <Checkbox
//         icon={
//           <FolderOpenIcon sx={{ mr: 1, color: "#1976d2" }} />
//         }
//         checkedIcon={
//           <FolderOpenIcon sx={{ mr: 1, color: "#1976d2" }} />
//         }
//         sx={{
//           "&.Mui-checked": {
//             "&, & + .MuiFormControlLabel-label": {
//               color: "red"
//             }
//           }
//         }}
//       />
//     }
//     label={el.name}
//   />
// </FormGroup>

//     <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">
//         Gender
//       </FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel
//           value="female"
//           control={<Radio />}
//           label="Female"
//         />
//         <FormControlLabel
//           value="male"
//           control={<Radio />}
//           label="Male"
//         />
//         <FormControlLabel
//           value="other"
//           control={<Radio />}
//           label="Other"
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// })}


// sx={{
                            //   "&.Mui-checked": {
                            //     "&, & + .MuiFormControlLabel-label": {
                            //       backgroundColor: "red",
                            //       fontWeight: "bold",
                            //     },
                            //   },
                            // }}