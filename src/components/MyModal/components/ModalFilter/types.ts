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
