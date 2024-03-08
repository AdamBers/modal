import "./App.css";
import Characteristics from "./components/Characteristics/Characteristics";
import { IDataCategory } from "./components/FilteredList/types";


function App() {
  const data: IDataCategory[] = [
    {
      name: "Color",
      items: [
        { id: 1, name: "Red", checked: true },
        { id: 2, name: "Green", checked: true },
        { id: 3, name: "Blue", checked: true },
      ],
    },

    {
      name: "ingredients",
      items: [
        { id: 1, name: "Fish", checked: true },
        { id: 2, name: "Milk", checked: true },
        { id: 3, name: "Pepper", checked: true },
        { id: 4, name: "Sugar", checked: true },
      ],
    },

    {
      name: "material",
      items: [
        { id: 1, name: "Cotton", checked: true },
        { id: 2, name: "Leather", checked: true },
        { id: 3, name: "Nylon", checked: true },
        { id: 4, name: "Plastic", checked: true },
        { id: 5, name: "Polyester", checked: true },
      ],
    },
  ];
  return (
    <>
      <Characteristics elements={data} />
    </>
  );
}

export default App;
