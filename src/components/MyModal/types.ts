import { SetStateAction, Dispatch } from "react";

export interface IItems {
  id: number;
  name: string;
  checked: boolean;
}

export interface IDataCategory {
  name: string;
  items: IItems[] | null;
}

export interface IMyModalProps {
  elements?: Array<IDataCategory>;
  setElements?: Dispatch<SetStateAction<IDataCategory[] | undefined>>;
}
