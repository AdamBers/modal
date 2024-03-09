import React, { Dispatch, SetStateAction } from "react";

interface IItems {
  id: number;
  name: string;
  checked: boolean;
}

interface IDataCategory {
  name: string;
  items: IItems[] | null;
}

export interface IContext {
  data?: IDataCategory[];
  setData?: Dispatch<SetStateAction<IDataCategory[] | undefined>>;
}

export const DataContext = React.createContext<IContext>({});
