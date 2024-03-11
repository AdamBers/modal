import { Dispatch, SetStateAction } from "react";

export interface IItems {
  id: number;
  name: string;
  checked: boolean;
}

export interface IDataCategory {
  id: number;
  name: string;
  items: IItems[] | null;
}

export interface IFilteredListProps {
  elements?: Array<IDataCategory>;
  setElements?: Dispatch<SetStateAction<IDataCategory[] | undefined>>;
}
