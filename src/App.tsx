import Characteristics from "./components/Characteristics/Characteristics";
import { useState, useMemo } from "react";
import { data as mock } from "./data";
import { DataContext } from "./context";
import { IContext } from "./context";
import "./App.css";

function App() {
  const [data, setData] = useState<IContext["data"]>(mock);
  const context = useMemo(() => {
    return { data, setData };
  }, []);

  return (
    <DataContext.Provider value={context}>
      <Characteristics />
    </DataContext.Provider>
  );
}

export default App;
